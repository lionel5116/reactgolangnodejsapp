import React ,{useState} from 'react'
import {ListGoup,Form,Container} from 'react-bootstrap';
import{
  Button,
    Card,
    Row,
    Col} from 'react-bootstrap'
import {BootstrapTable,TableHeaderColumn,Grid} from "react-bootstrap-table";
import AppAPI from '../api/AppAPI';

function MongoDBExpressJSPage() {

  const [tblSearchResults, setSearchResults] = useState([])

  async function MongoDBExpressJSPData() {         
    let _SEARCH_DATA = [];
    var myAPI = new AppAPI;
    try
    {
      _SEARCH_DATA = await myAPI.MongoDBExpressJSPData()
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
          onClick={()=>MongoDBExpressJSPData()}
         >Fetch Docker MongoDB Data</Button>
         </Col>
       </Row>
       <hr></hr>
       <Row>
         <Col sm={12}>
         <h2>Search Results</h2>
            <BootstrapTable data={tblSearchResults} striped hover options={options}
              pagination           
            >
              <TableHeaderColumn row="1" width="5%" dataField="_id" isKey={true} hidden={true}>_id</TableHeaderColumn>
              <TableHeaderColumn row="1" width="30%" dataField="firstname">firstname</TableHeaderColumn> 
              <TableHeaderColumn row="1" width="30%" dataField="lastName">lastName</TableHeaderColumn> 
              <TableHeaderColumn row="1" width="30%" dataField="email">email</TableHeaderColumn>
              <TableHeaderColumn row="1" width="5%" dataField="gender">gender</TableHeaderColumn>     
            </BootstrapTable>
         </Col>
       </Row>
      </Container>
    </div>
  )
}

export default MongoDBExpressJSPage