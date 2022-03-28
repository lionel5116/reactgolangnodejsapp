import React ,{useState} from 'react'
import {ListGoup,Form,Container} from 'react-bootstrap';
import{
  Button,
    Card,
    Row,
    Col} from 'react-bootstrap'
import {BootstrapTable,TableHeaderColumn,Grid} from "react-bootstrap-table";
import AppAPI from '../api/AppAPI';

function ExpressJSPage() {

  const [tblSearchResults, setSearchResults] = useState([])

  async function fetchExpressJSData() {         
    let _SEARCH_DATA = [];
    var myAPI = new AppAPI;
    try
    {
      _SEARCH_DATA = await myAPI.fetchExpressJSData()
    }
    catch(err)
    {
      console.log(err)
    }
    console.log(_SEARCH_DATA.data)
    setSearchResults(_SEARCH_DATA.data)
    //console.log(_SEARCH_DATA)
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
     <h2>EXPRESS JS API Example</h2>
      <Container>
       <Row>
         <Col sm={12}>
         <Button variant="outline-success" 
          onClick={()=>fetchExpressJSData()}
         >Fetch Express JS Data</Button>
         </Col>
       </Row>
       <hr></hr>
       <Row>
         <Col sm={12}>
         <h2>Search Results</h2>
            <BootstrapTable data={tblSearchResults} striped hover options={options}
              pagination           
            >
            
              <TableHeaderColumn row="1" width="1%" dataField="id" isKey={true}>id</TableHeaderColumn>
              <TableHeaderColumn row="1" width="20%" dataField="name">name</TableHeaderColumn> 
              <TableHeaderColumn row="1" width="20%" dataField="released_year">released_year</TableHeaderColumn> 
              <TableHeaderColumn row="1" width="20%" dataField="githut_rank">githut_rank</TableHeaderColumn>
              <TableHeaderColumn row="1" width="20%" dataField="pypl_rank">pypl_rank</TableHeaderColumn>
              <TableHeaderColumn row="1" width="19%" dataField="tiobe_rank">tiobe_rank</TableHeaderColumn>      
            </BootstrapTable>
         </Col>
       </Row>
      </Container>
    </div>
  )
}

export default ExpressJSPage