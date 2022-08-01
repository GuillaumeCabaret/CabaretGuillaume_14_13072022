import { format } from "date-fns";

export const tableColumns = [
    {
      Header: "First Name",
      accessor: "firstName",
    },
    {
      Header: "Last Name",
      accessor: "lastName",
    },
    {
      Header: "Start Date",
      accessor: (value) => {
         return format(new Date(value.startDate), "yyyy-MM-dd");
      },
    },
    {
      Header: "Date of Birth",
      accessor: (value) => {
        return format(new Date(value.dateOfBirth), "yyyy-MM-dd");
      },
    },
    {
      Header: "Department",
      accessor: "department",
    },
    {
      Header: "Street",
      accessor: "street",
    },
    {
      Header: "City",
      accessor: "city",
    },
    {
      Header: "State",
      accessor: "state",
    },
    {
      Header: "Zip Code",
      accessor: "zipCode",
    },
  ];