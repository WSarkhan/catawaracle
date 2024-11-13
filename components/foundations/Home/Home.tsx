import React from 'react';
import { G, Path, Svg } from 'react-native-svg';

export const Home = ({ color = 'black' }) => {
  return (
    <Svg viewBox="0 0 100 90" width="34" height="34">
      <G>
        <Path
          d="m6.5703 78.719c0.050782 0.55078 0.17188 1.0898 0.30078 1.6289 1.0117 4.3203 4.1484 8.0703 8.2695 9.9688 1.0391 0.44922 2.1211 0.82812 3.2383 1.0508 0.55859 0.10937 1.1211 0.21875 1.6914 0.25l0.85156 0.070312 0.64844 0.03125 5.2305 0.23828c6.5 0.32031 15.93 0.69922 15.719-4.3008-0.17188-4.1016-9.0898-3.6406-15.09-3.6602h-5.1211-1.2812l-0.87109-0.039063c-0.26953-0.050781-0.55078-0.078125-0.82031-0.12891-0.26172-0.078125-0.53906-0.10938-0.78906-0.21875-2.0781-0.69141-3.8789-2.3594-4.6484-4.4492l-0.14844-0.39062-0.10156-0.39844c-0.089844-0.26172-0.12109-0.53906-0.17188-0.80859-0.070312-0.26953-0.050781-0.55859-0.078124-0.82812 0-0.078125-0.011719-0.12109-0.019532-0.21875v-0.32031-0.64062l-0.039062-5.1211-0.089844-10.238-0.19141-20.469v-1.2188c0-0.30859 0.019531-0.60937 0.050781-0.92187 0.070313-0.60938 0.19141-1.2109 0.37109-1.8008 0.37891-1.1719 0.96094-2.2812 1.7695-3.2109 0.39844-0.46875 0.83984-0.91016 1.3281-1.2891 0.12109-0.10156 0.25-0.19141 0.37109-0.28125 0.12109-0.089844 0.23828-0.17969 0.44141-0.30859l1.0586-0.71094 4.2617-2.8398 17.809-11.871 2.2305-1.4805 1.1094-0.73828 0.55859-0.37109c0.19141-0.12891 0.28906-0.17969 0.44141-0.26953 1.0703-0.67187 2.3281-1.0781 3.6211-1.25 1.3008-0.17187 2.6289-0.070312 3.8789 0.28125 0.62109 0.19141 1.2305 0.39844 1.7812 0.71094 0.30078 0.12891 0.53125 0.32031 0.82812 0.48828l1.1094 0.73828 17.809 11.871 8.7617 5.8516c2.1016 1.5195 3.5 3.9492 3.7812 6.5312 0.019531 0.21094 0.050781 0.42969 0.039062 0.66016v0.33984l-0.011719 0.46094c-0.019531 0.64062-0.039062 1.3008-0.058593 1.9609-0.03125 1.3203-0.039063 2.6406 0.058593 3.8203 0.21094 2.3711 0.89062 4.1797 2.7305 4.3281 1.9883 0.16016 2.6992-1.5781 2.9297-3.9219 0.10937-1.1719 0.10156-2.4883 0.070312-3.8008-0.039062-1.3594-0.089844-2.6992-0.12109-3.8516-0.23047-4.0391-2.1797-7.9688-5.3203-10.57-0.39062-0.32812-0.80078-0.62891-1.2109-0.92188l-1.0898-0.73828-2.1719-1.4609-4.3398-2.9219-17.41-11.621-2.1797-1.4492c-0.78906-0.51953-1.7305-1.0703-2.6719-1.4414-1.8906-0.80078-3.9219-1.1719-5.9492-1.1914-2.0312 0.019532-4.0586 0.39844-5.9414 1.1992-0.92969 0.37109-1.8789 0.92969-2.6602 1.4492l-2.1797 1.4492-17.422 11.621-4.3594 2.8906-2.1797 1.4414-1.1016 0.73047c-0.42188 0.28906-0.82812 0.58984-1.2188 0.91016-3.1797 2.5781-5.1914 6.5195-5.4883 10.609l-0.30859 21.078-0.21875 10.461-0.14062 5.2305-0.039062 1.3086c0 0.44922-0.039063 0.82031-0.011719 1.4219 0 0.55078 0.03125 1.1016 0.12109 1.6406z"
          fill={color}
        />
        <Path
          d="m53.738 65.051c-5.4297 4.4219 3.2109 11.801 6.3281 5.8711 2.9219-4.1289-2.4688-9.2617-6.3281-5.8711z"
          fill={color}
        />
        <Path
          d="m76.359 60.75c2.9219-4.1289-2.4688-9.2617-6.3281-5.8711-5.4297 4.4219 3.2109 11.801 6.3281 5.8711z"
          fill={color}
        />
        <Path
          d="m92.719 70.871c2.9219-4.1289-2.4688-9.2617-6.3281-5.8711-5.4297 4.4219 3.2109 11.801 6.3281 5.8711z"
          fill={color}
        />
        <Path
          d="m56.129 91.551c0 0.71094-0.17969 1.6289 0.14062 2.3281 0.30859 0.69141 1.1016 1.0898 2.8984 0.71094 3.8789-0.85156 2.5117-1.9688 2.5781-2.9414 0.10156-2.8398 1.1992-5.5703 3.1289-7.6016 1.9219-2.0312 4.6289-3.3203 7.4492-3.3906 2.8086-0.10156 5.6211 1.0312 7.4609 3.0508 1.8906 1.9805 2.6602 4.7812 2.1094 7.1914-0.10938 0.57031-0.32031 1.1914 0.10156 1.7812 0.42969 0.57812 1.4414 1.2617 3.8906 1.8086 1.9883 0.44141 3.0508-0.011719 3.5586-0.89844 0.51953-0.87891 0.44922-2.0781 0.39844-3.0195-0.17188-4.3008-2.25-8.5117-5.4492-11.289-3.1602-2.8516-7.3789-4.3789-11.551-4.3789-4.3711-0.050782-8.75 1.7383-11.828 4.8398-3.1289 3.0586-4.9297 7.4609-4.8711 11.82z"
          fill={color}
        />
      </G>
    </Svg>
  );
};
