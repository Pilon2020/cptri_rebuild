import MustangShowdown from '../pages/MustangShowdown';
import MarchTriathlonSeries from '../pages/MarchTriathlonSeries';
import TourDeDonut from '../pages/TourDeDonut';
import HeartAndSoles from '../pages/HeartAndSoles';

const raceInfo = {
  Mustang_Showdown: {
    title: "Mustang Showdown",
    registerLink: "https://www.active.com/san-luis-obispo-ca/running/distance-running-races/mustang-showdown-2024",
    years: [
      { label: "2024 Results", to: "/races/Mustang_Showdown/2024" },
      { label: "2023 Results", to: "/races/Mustang_Showdown/2023" },
    ],
    component: MustangShowdown,
  },
  MarchTriathlonSeries: {
    title: "March Triathlon Series",
    years: [
      { label: "2024 Results", to: "/races/MarchTriathlonSeries/2024" },
      { label: "2023 Results", to: "/races/MarchTriathlonSeries/2023" },
    ],
    component: MarchTriathlonSeries,
  },
  TourDeDonut: {
    title: "Tour De Donut",
    years: [
      { label: "2024 Results", to: "/races/TourDeDonut/2024" },
      { label: "2023 Results", to: "/races/TourDeDonut/2023" },
    ],
    component: TourDeDonut,
  },
  HeartandSoles: {
    title: "Heart and Soles",
    years: [
      { label: "2024 Results", to: "/races/HeartandSoles/2024" },
      { label: "2023 Results", to: "/races/HeartandSoles/2023" },
    ],
    component: HeartAndSoles,
  },
};

export default raceInfo;
