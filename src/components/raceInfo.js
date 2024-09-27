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
    ],
    component: MustangShowdown,
    slug: 'MustangShowdown',
    courseDescription:"Course Description",
    raceDescription: "Information about the Mustang Showdown race."
  },
  MarchTriathlonSeries: {
    title: "March Triathlon Series",
    registerLink: "",
    years: [
      { label: "2024 Results", to: "/races/MarchTriathlonSeries/2024" },
    ],
    component: MarchTriathlonSeries,
    slug: 'mts',
    courseDescription: "Details about the March Triathlon Series course.",
    raceDescription: "Information about the March Triathlon Series race."
  },
  TourDeDonut: {
    title: "Tour De Donut",
    registerLink: "",
    years: [
      { label: "2024 Results", to: "/races/TourDeDonut/2024" },
    ],
    component: TourDeDonut,
    slug: 'tdd',
    courseDescription: "Details about the Tour De Donut course.",
    raceDescription: "Information about the Tour De Donut race."
  },
  HeartandSoles: {
    title: "Heart and Soles",
    registerLink: "",
    years: [
      { label: "2024 Results", to: "/races/HeartandSoles/2024" },
      { label: "2023 Results", to: "/races/HeartandSoles/2023" },
    ],
    component: HeartAndSoles,
    slug: 'heartsoles',
    courseDescription: "Details about the Heart and Soles course.",
    raceDescription: "Information about the Heart and Soles race."
  },
};

export default raceInfo;
