const navRouting = [
    {name:'Explore', route: '/explore'},
    {name:'Stats', route: '/stats'},
    {name:'Create', route: '/create'}
]

const TrendingCard = [
    {
        src: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Anisha Varma",
        rank: "#1",
        floorPrice: '1.3ETH',
        volume: "10.2k",
        sales: "543"
    },
    {
        src: "https://images.pexels.com/photos/7860674/pexels-photo-7860674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "John Doe",
        rank: "#2",
        floorPrice: '0.8ETH',
        volume: "15.7k",
        sales: "732"
    },
    {
        src: "https://images.pexels.com/photos/23437027/pexels-photo-23437027/free-photo-of-a-white-bird-with-a-long-beak-standing-in-the-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Alice Smith",
        rank: "#3",
        floorPrice: '2.1ETH',
        volume: "8.4k",
        sales: "621"
    },
    {
        src: "https://images.pexels.com/photos/10311994/pexels-photo-10311994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Bob Johnson",
        rank: "#4",
        floorPrice: '0.5ETH',
        volume: "12.3k",
        sales: "498"
    },
    {
        src: "https://images.pexels.com/photos/13081260/pexels-photo-13081260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Emily Wang",
        rank: "#5",
        floorPrice: '1.9ETH',
        volume: "6.8k",
        sales: "387"
    },
    {
        src: "https://images.pexels.com/photos/14807470/pexels-photo-14807470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "David Lee",
        rank: "#6",
        floorPrice: '1.2ETH',
        volume: "9.5k",
        sales: "543"
    },
    {
        src: "https://images.pexels.com/photos/3812743/pexels-photo-3812743.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Samantha Jones",
        rank: "#7",
        floorPrice: '1.5ETH',
        volume: "11.1k",
        sales: "654"
    },
    {
        src: "https://images.pexels.com/photos/20094341/pexels-photo-20094341/free-photo-of-portrait-of-man-wearing-brown-cap.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Michael Brown",
        rank: "#8",
        floorPrice: '0.7ETH',
        volume: "7.6k",
        sales: "432"
    },
    {
        src: "https://images.pexels.com/photos/5641225/pexels-photo-5641225.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Sophia Garcia",
        rank: "#9",
        floorPrice: '1.8ETH',
        volume: "14.2k",
        sales: "789"
    },
    {
        src: "https://images.pexels.com/photos/14942101/pexels-photo-14942101.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "William Martinez",
        rank: "#10",
        floorPrice: '0.4ETH',
        volume: "5.3k",
        sales: "345"
    }
];

const Top10Data = [
    {
        src: "https://images.pexels.com/photos/20106383/pexels-photo-20106383/free-photo-of-hands-holding-a-matcha-cup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Elijah Rodriguez",
        rank: "#1",
        floorPrice: '1.5ETH',
        volume: "11.8k",
        sales: "627"
    },
    {
        src: "https://images.pexels.com/photos/23371092/pexels-photo-23371092/free-photo-of-leather-purse-and-a-car-key-case.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Ava Foster",
        rank: "#2",
        floorPrice: '0.9ETH',
        volume: "8.3k",
        sales: "451"
    },
    {
        src: "https://images.pexels.com/photos/23371092/pexels-photo-23371092/free-photo-of-leather-purse-and-a-car-key-case.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Oscar Young",
        rank: "#3",
        floorPrice: '2.3ETH',
        volume: "14.6k",
        sales: "872"
    },
    {
        src: "https://images.pexels.com/photos/20099425/pexels-photo-20099425/free-photo-of-waterlilies-in-the-pond.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Emma Patel",
        rank: "#4",
        floorPrice: '0.7ETH',
        volume: "5.9k",
        sales: "378"
    },
    {
        src: "https://images.pexels.com/photos/20099425/pexels-photo-20099425/free-photo-of-waterlilies-in-the-pond.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Noah Nguyen",
        rank: "#5",
        floorPrice: '1.8ETH',
        volume: "9.7k",
        sales: "593"
    },
    {
        src: "https://images.pexels.com/photos/20107094/pexels-photo-20107094/free-photo-of-woman-lying-on-the-floor-among-open-books.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Sophie Brown",
        rank: "#6",
        floorPrice: '1.2ETH',
        volume: "12.2k",
        sales: "724"
    },
    {
        src: "https://images.pexels.com/photos/20107094/pexels-photo-20107094/free-photo-of-woman-lying-on-the-floor-among-open-books.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Mason Jackson",
        rank: "#7",
        floorPrice: '1.6ETH',
        volume: "6.5k",
        sales: "429"
    },
    {
        src: "https://images.pexels.com/photos/20107094/pexels-photo-20107094/free-photo-of-woman-lying-on-the-floor-among-open-books.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Isabella White",
        rank: "#8",
        floorPrice: '0.6ETH',
        volume: "8.9k",
        sales: "512"
    },
    {
        src: "https://images.pexels.com/photos/20087799/pexels-photo-20087799/free-photo-of-close-up-of-a-green-lizard.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "William Lopez",
        rank: "#9",
        floorPrice: '2.0ETH',
        volume: "10.3k",
        sales: "658"
    },
    {
        src: "https://images.pexels.com/photos/20100232/pexels-photo-20100232/free-photo-of-a-bicycle-in-a-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Aria Garcia",
        rank: "#10",
        floorPrice: '0.8ETH',
        volume: "7.4k",
        sales: "492"
    }
];


const JwelleriesData = [
    {
      totalVol: "120 ETH",
      name: "John Doe",
      src: "https://images.pexels.com/photos/938580/pexels-photo-938580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      floorPrice: "10 ETH",
      coverSrc: "https://images.pexels.com/photos/962312/pexels-photo-962312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      totalVol: "200 ETH",
      name: "Jane Smith",
      src: "https://images.pexels.com/photos/2345293/pexels-photo-2345293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      floorPrice: "15 ETH",
      coverSrc: "https://images.pexels.com/photos/1327373/pexels-photo-1327373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      totalVol: "340 ETH",
      name: "Alice Johnson",
      src: "https://images.pexels.com/photos/792725/pexels-photo-792725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      floorPrice: "20 ETH",
      coverSrc: "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      totalVol: "150 ETH",
      name: "Bob Brown",
      src: "https://images.pexels.com/photos/2894944/pexels-photo-2894944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      floorPrice: "12 ETH",
      coverSrc: "https://images.pexels.com/photos/2433467/pexels-photo-2433467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      totalVol: "80 ETH",
      name: "Charlie Davis",
      src: "https://images.pexels.com/photos/228842/pexels-photo-228842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      floorPrice: "8 ETH",
      coverSrc: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      totalVol: "500 ETH",
      name: "David Harris",
      src: "https://images.pexels.com/photos/3876394/pexels-photo-3876394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      floorPrice: "25 ETH",
      coverSrc: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      totalVol: "230 ETH",
      name: "Eve Wilson",
      src: "https://images.pexels.com/photos/3459967/pexels-photo-3459967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      floorPrice: "18 ETH",
      coverSrc: "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      totalVol: "90 ETH",
      name: "Frank Moore",
      src: "https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      floorPrice: "9 ETH",
      coverSrc: "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      totalVol: "75 ETH",
      name: "Grace Taylor",
      src: "https://images.pexels.com/photos/1317712/pexels-photo-1317712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      floorPrice: "7 ETH",
      coverSrc: "https://images.pexels.com/photos/1421837/pexels-photo-1421837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      totalVol: "400 ETH",
      name: "Hank Anderson",
      src: "https://images.pexels.com/photos/399772/pexels-photo-399772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      floorPrice: "22 ETH",
      coverSrc: "https://images.pexels.com/photos/1327354/pexels-photo-1327354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      totalVol: "310 ETH",
      name: "Ivy Thomas",
      src: "https://images.pexels.com/photos/5990737/pexels-photo-5990737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      floorPrice: "17 ETH",
      coverSrc: "https://images.pexels.com/photos/1327335/pexels-photo-1327335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      totalVol: "260 ETH",
      name: "Jack Martin",
      src: "https://images.pexels.com/photos/2609925/pexels-photo-2609925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      floorPrice: "14 ETH",
      coverSrc: "https://images.pexels.com/photos/1479242/pexels-photo-1479242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];
  

  

  const getInitials = (name) => {
    if (!name) {
      return ''; // Return an empty string if name is undefined or null
    }
  
    const nameParts = name.split(' ');
  
    if (nameParts.length === 1) {
      // Only first name provided, take first two letters
      return nameParts[0].substring(0, 2).toUpperCase();
    } else {
      // First and last name provided, take first letter of each
      return (nameParts[0][0] + nameParts[1][0]).toUpperCase();
    }
  };



  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getRandomPercentage = () => (Math.random() * 100).toFixed(2) + '%';

const getRandomCollectionName = () => {
  const names = ["John Doe", "Alice Smith", "Emma Johnson", "Michael Brown", "Olivia Davis"];
  return names[Math.floor(Math.random() * names.length)];
};

const getRandomVolume = () => (Math.random() * 10).toFixed(4) + ' ETH';

const getRandomFloorPrice = () => (Math.random() * 5).toFixed(4) + ' ETH';

const getRandomSales = () => getRandomNumber(1, 100);

const getRandomChange = () => getRandomNumber(-50, 50) + '%';

const getRandomOwnersCount = () => getRandomNumber(100, 5000) + ' owners';

const getRandomItemsListedCount = () => getRandomNumber(10, 1000) + ' of 10000';

const generateRandomDataList = (length) => {
  const dataList = [];

  for (let i = 0; i < length; i++) {
    const rank = i + 1;
    const collection = getRandomCollectionName();
    const collectionImg = ''; // You can provide an image URL here if available
    const volume = getRandomVolume();
    const floorPrice = getRandomFloorPrice();
    const sales = getRandomSales();
    const change = getRandomChange();
    const uniqueOwnersPercentage = getRandomPercentage();
    const owners = getRandomOwnersCount();
    const itemsListedPercentage = getRandomPercentage();
    const itemsListed = getRandomItemsListedCount();

    dataList.push({ rank, collection, collectionImg, volume, floorPrice, sales, change, uniqueOwnersPercentage, owners, itemsListedPercentage, itemsListed });
  }

  return dataList;
};

 generateRandomDataList;



  

export {navRouting, TrendingCard, Top10Data, getInitials, JwelleriesData, generateRandomDataList}