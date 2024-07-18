export interface LogisticsData {
    status: string;
    Price: string;
    RUC: string;
    Origen: string;
    Destination: string;
    Customer: string;
    information: string;
  }
  
  const logisticsData: LogisticsData[] = [
    {
        "status": "In progress",
        "Price": "$50.00",
        "RUC": "12345678901",
        "Origen": "Lima",
        "Destination": "Trujillo",
        "Customer": "John Doe",
        "information": "Transport 2 boxes of clothes"
      },
      {
        "status": "Cancelled",
        "Price": "$30.00",
        "RUC": "10987654321",
        "Origen": "Cusco",
        "Destination": "Arequipa",
        "Customer": "Jane Smith",
        "information": "Deliver a package of handmade crafts"
      },
      {
        "status": "Completed",
        "Price": "$80.00",
        "RUC": "56789012345",
        "Origen": "Guayaquil",
        "Destination": "Quito",
        "Customer": "Michael Johnson",
        "information": "Transport a fragile item"
      },
      {
        "status": "In progress",
        "Price": "$45.00",
        "RUC": "32109876543",
        "Origen": "Santiago",
        "Destination": "Valparaiso",
        "Customer": "Sarah Williams",
        "information": "Deliver a bouquet of flowers"
      },
      {
        "status": "Cancelled",
        "Price": "$60.00",
        "RUC": "67890123456",
        "Origen": "La Paz",
        "Destination": "Cochabamba",
        "Customer": "Robert Brown",
        "information": "Transport a large piece of furniture"
      },
      {
        "status": "Completed",
        "Price": "$75.00",
        "RUC": "21098765432",
        "Origen": "Buenos Aires",
        "Destination": "Rosario",
        "Customer": "Olivia Davis",
        "information": "Deliver a package of medical supplies"
      },
      {
        "status": "In progress",
        "Price": "$55.00",
        "RUC": "54321098765",
        "Origen": "Lima",
        "Destination": "Ica",
        "Customer": "William Wilson",
        "information": "Transport a car"
      },
      {
        "status": "Cancelled",
        "Price": "$40.00",
        "RUC": "87654321098",
        "Origen": "Quito",
        "Destination": "Guayaquil",
        "Customer": "Emily Taylor",
        "information": "Deliver a package of electronic devices"
      },
      {
        "status": "Completed",
        "Price": "$70.00",
        "RUC": "65432109876",
        "Origen": "Arequipa",
        "Destination": "Lima",
        "Customer": "Daniel Martinez",
        "information": "Transport a valuable artwork"
      },
      {
        "status": "In progress",
        "Price": "$50.00",
        "RUC": "98765432109",
        "Origen": "Trujillo",
        "Destination": "Chiclayo",
        "Customer": "Sophia Anderson",
        "information": "Deliver a package of books"
      }
  ];
  
  export default logisticsData;
  