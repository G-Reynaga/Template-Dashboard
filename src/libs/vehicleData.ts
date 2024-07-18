export interface VehicleData {
    id: string;
    location: string;
    temperature: {
      status: string;
      value: number;
    };
    timeline: {
      status: string;
      time: string;
    }[];
  }
  
  export const vehicleData: VehicleData[] = [
    {
      id: "VEH-002",
      location: "Seedspace, Miraflores, Perú",
      temperature: {
        status: "good",
        value: 6,
      },
      timeline: [
        {
          status: "Arrived",
          time: "Apr 26, 2024 5:13 PM",
        },
        {
          status: "Out for delivery",
          time: "Apr 26, 2024 4:48 PM",
        },
        {
          status: "Tracking number created",
          time: "Apr 26, 2024 3:01 PM",
        },
      ],
    },
    {
      id: "VEH-001",
      location: "Seedspace, Surco, Perú",
      temperature: {
        status: "good",
        value: 6,
      },
      timeline: [
        {
          status: "Arrived",
          time: "Apr 26, 2024 5:13 PM",
        },
        {
          status: "Out for delivery",
          time: "Apr 26, 2024 4:48 PM",
        },
        {
          status: "Tracking number created",
          time: "Apr 26, 2024 3:01 PM",
        },
      ],
    },
  ];
  