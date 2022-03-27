import React ,{useState} from 'react'
import {ListGoup,Form,Container} from 'react-bootstrap';
import{
  Button,
    Card,
    Row,
    Col} from 'react-bootstrap'
import {BootstrapTable,TableHeaderColumn,Grid} from "react-bootstrap-table";
import AppAPI from '../api/AppAPI';

function GoLangPage() {

  const [tblSearchResults, setSearchResults] = useState([])

  async function fetchGoangData() {         
    let _SEARCH_DATA = [];
    var myAPI = new AppAPI;
    try
    {
      _SEARCH_DATA = await myAPI.fetchGoangData()
    }
    catch(err)
    {
      console.log(err)
    }
    setSearchResults(_SEARCH_DATA)
    console.log(_SEARCH_DATA)
}


  const options = {
    exportCSVText: 'Export CSV',
    insertText: 'Insert',
    deleteText: 'Delete',
    saveText: 'Save',
    closeText: 'Close',

    sizePerPage: 25,
    sortOrder: 'desc',
    prePage: 'Prev',
    nextPage: 'Next',
    firstPage: 'First',
    lastPage: 'Last',
    paginationShowsTotal: renderShowsTotal
  };


  function renderShowsTotal(start, to, total) {
    return (
        <p style={{color: 'black'}}>
        From {start} to {to}. Total: {total}&nbsp;&nbsp;
        </p>
    );
}

  return (
    <div>
     <h2>GoLang API Example</h2>
      <Container>
       <Row>
         <Col sm={12}>
         <Button variant="outline-secondary" 
          onClick={()=>fetchGoangData()}
         >Fetch GoLang Data</Button>
         </Col>
       </Row>
       <hr></hr>
       <Row>
         <Col sm={12}>
         <h2>Search Results</h2>
            <BootstrapTable data={tblSearchResults} striped hover options={options}
              pagination           
            >
            
              <TableHeaderColumn row="1" width="20%" dataField="product_id" isKey={true}>product_id</TableHeaderColumn>
              <TableHeaderColumn row="1" width="20%" dataField="name">name</TableHeaderColumn> 
              <TableHeaderColumn row="1" width="30%" dataField="quantity_in_stock">quantity_in_stock</TableHeaderColumn> 
              <TableHeaderColumn row="1" width="20%" dataField="unit_price">unit_price</TableHeaderColumn>      
            </BootstrapTable>
         </Col>
       </Row>
      </Container>
    </div>
  )
}

export default GoLangPage