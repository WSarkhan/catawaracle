import { useState, useCallback, useEffect } from 'react';
import { castVote, undoVote, fetchVotes } from '@/api';
import { CatImage } from '@/types';

interface Vote {
  voteId: number;
  value: number;
}

interface Votes {
  [key: string]: Vote;
}

interface VoteData {
  id: number;
  image_id: string;
  value: number;
}

export const useVotes = (
  showCustomAlert: (title: string, message: string) => void,
) => {
  const [votes, setVotes] = useState<Votes>({});

  const loadVotes = async (): Promise<void> => {
    try {
      const votesData: VoteData[] = await fetchVotes();
      const mappedVotes: Votes = votesData.reduce((acc, vote) => {
        acc[vote.image_id] = { voteId: vote.id, value: vote.value };
        return acc;
      }, {} as Votes);
      setVotes(mappedVotes);
    } catch {
      showCustomAlert('Error', 'Failed to load votes');
    }
  };

  const vote = useCallback(
    async (imageId: string, value: number): Promise<void> => {
      try {
        const { id } = await castVote(imageId, value);
        setVotes((prev) => ({ ...prev, [imageId]: { voteId: id, value } }));
      } catch {
        showCustomAlert('Error', 'Failed to cast vote');
      }
    },
    [showCustomAlert],
  );

  const undoUserVote = useCallback(
    async (imageId: string): Promise<void> => {
      const existingVote = votes[imageId];
      if (!existingVote) return;
      try {
        await undoVote(existingVote.voteId);
        setVotes((prev) => {
          const updated = { ...prev };
          delete updated[imageId];
          return updated;
        });
      } catch {
        showCustomAlert('Error', 'Failed to undo vote');
      }
    },
    [votes, showCustomAlert],
  );

  const handleVote = useCallback(
    async (
      cat: CatImage & { votes?: number },
      value: number,
      updateCatVotes: (imageId: string, delta: number) => void,
    ) => {
      const userVote = votes[cat.id];
      const userVotedUp = userVote?.value === 1;
      const userVotedDown = userVote?.value === 0;

      try {
        if (value === 1 && userVotedUp) {
          await undoUserVote(cat.id);
          updateCatVotes(cat.id, -1);
        } else if (value === 0 && userVotedDown) {
          await undoUserVote(cat.id);
          updateCatVotes(cat.id, 1);
        } else {
          if (value === 1 && userVotedDown) {
            await undoUserVote(cat.id);
            updateCatVotes(cat.id, 1);
          } else if (value === 0 && userVotedUp) {
            await undoUserVote(cat.id);
            updateCatVotes(cat.id, -1);
          }
          await vote(cat.id, value);
          updateCatVotes(cat.id, value === 1 ? 1 : -1);
        }
      } catch {
        showCustomAlert('Error', 'Failed to handle vote');
      }
    },
    [votes, vote, undoUserVote, showCustomAlert],
  );

  useEffect(() => {
    loadVotes();
  }, []);

  return { votes, handleVote };
};
