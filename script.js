// Grid Options: Contains all of the Data Grid configurations

(async () => {
  const data = await fetch(
    'https://raw.githubusercontent.com/mani-cs/aggrid_data/main/data.json'
  ).then((response) => response.json());
  const gridOptions = {
    // Row Data: The data to be displayed.
    rowData: data,
    // Column Definitions: Defines the columns to be displayed.
    columnDefs: [
      {
        headerName: 'Order Number',
        field: 'ORDERNUMBER',
        sortable: true,
        filter: true,
        headerCheckboxSelection: true,
        checkboxSelection: true,
        index: 0,
        floatingFilter: true,
        filter: 'agMultiColumnFilter',
      },
      {
        headerName: 'Quantity Ordered',
        aggFunc: 'sum',
        field: 'QUANTITYORDERED',
        sortable: true,
        filter: true,
        cellClass: 'ag-right-aligned-cell',
      },
      {
        headerName: 'Price Each',
        field: 'PRICEEACH',
        type: 'number',
        cellClass: 'ag-right-aligned-cell',
        sortable: true,
        filter: true,
        valueFormatter: (params) =>
          `$${numeral(params.value).format('0,0.00')}`,
      },
      {
        headerName: 'Order Line Number',
        cellClass: 'ag-right-aligned-cell',
        field: 'ORDERLINENUMBER',
        sortable: true,
        filter: true,
      },
      {
        headerName: 'Sales',
        field: 'SALES',
        cellClass: 'ag-right-aligned-cell',
        sortable: true,
        filter: true,
        valueFormatter: (params) =>
          `$${numeral(params.value).format('0,0.00')}`,
      },
      {
        headerName: 'Order Date',
        field: 'ORDERDATE',
        sortable: true,
        filter: true,
        valueFormatter: (params) => dayjs(params.value).format('MM/DD/YYYY'),
      },
      {
        headerName: 'Status',
        field: 'STATUS',
        sortable: true,
        filter: true,
        cellStyle: (params) => {
          if (params.value === 'Shipped') {
            return { backgroundColor: 'lightgreen' };
          } else if (params.value === 'In Process') {
            return { backgroundColor: 'lightblue' };
          } else if (params.value === 'Cancelled') {
            return { backgroundColor: 'lightcoral' };
          }
        },
      },
      {
        headerName: 'Quarter ID',
        field: 'QTR_ID',
        sortable: true,
        filter: true,
      },
      {
        headerName: 'Month ID',
        field: 'MONTH_ID',
        sortable: true,
        filter: true,
      },
      {
        headerName: 'Year ID',
        field: 'YEAR_ID',
        sortable: true,
        filter: true,
        pivot: true,
      },
      {
        headerName: 'Product Line',
        field: 'PRODUCTLINE',
        sortable: true,
        filter: true,
        rowGroup: true,
      },
      {
        headerName: 'MSRP',
        field: 'MSRP',
        sortable: true,
        filter: true,
        valueFormatter: (params) =>
          `$${numeral(params.value).format('0,0.00')}`,
      },
      {
        headerName: 'Product Code',
        field: 'PRODUCTCODE',
        sortable: true,
        filter: true,
      },
      {
        headerName: 'Customer Name',
        field: 'CUSTOMERNAME',
        sortable: true,
        filter: true,
      },
      { headerName: 'Phone', field: 'PHONE', sortable: true, filter: true },
      {
        headerName: 'Address Line 1',
        field: 'ADDRESSLINE1',
        sortable: true,
        filter: true,
      },
      { headerName: 'Country', field: 'COUNTRY', sortable: true, filter: true },
      { headerName: 'City', field: 'CITY', sortable: true, filter: true },
      { headerName: 'State', field: 'STATE', sortable: true, filter: true },
      {
        headerName: 'Postal Code',
        field: 'POSTALCODE',
        sortable: true,
        filter: true,
      },
      {
        headerName: 'Territory',
        field: 'TERRITORY',
        sortable: true,
        filter: true,
      },
      {
        headerName: 'Contact Last Name',
        field: 'CONTACTLASTNAME',
        sortable: true,
        filter: true,
      },
      {
        headerName: 'Contact First Name',
        field: 'CONTACTFIRSTNAME',
        sortable: true,
        filter: true,
      },
      {
        headerName: 'Deal Size',
        field: 'DEALSIZE',
        sortable: true,
        filter: true,
      },
    ],
    pivotMode: true,
    enableAdvancedFilter: true,
    cacheBlockSize: 100,
    // rowGroupPanelShow: 'always',
    maxBlocksInCache: 10,
    rowBuffer: 10,
    // autoSizeStrategy: {
    //     type: 'fitCellContents',
    // },
    sideBar: 'columns',
    groupDisplayType: 'multipleColumns',
    pivotMaxGeneratedColumns: 1000,
    suppressRowClickSelection: true,
    groupHideOpenParents: true,
    rowSelection: 'multiple',
    defaultColDef: {
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      width: 140,
    },
    autoGroupColumnDef: {
      field: 'PRODUCTLINE',
      cellRenderer: 'agGroupCellRenderer',
      cellRendererParams: {
        checkbox: true,
      },
      headerCheckboxSelection: true,
    },
  };

  // Your Javascript code to create the Data Grid
  const myGridElement = document.querySelector('#myGrid');
  agGrid.createGrid(myGridElement, gridOptions);
})();
