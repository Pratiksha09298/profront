import React, { Component } from 'react';
    
    class ListStudentComponent extends Component {
        constructor(){
            super();
            this.state={
                student:[]
            }
        }
        componentDidMount(){
             StudentServices.getStudents().then((res)=>
             {
                 this.setState({Students:res.data} );
             }
             )
            }
            
        render() {
            return (
                <div>
                    <h2 className="text-center"> Student List</h2>
                    <div className="row">
                        <table className="table table-striped tablde-bordered">
                            <tbody>
                                <tr>
                                    <th>Student first name</th>
                                    <th>Student last name</th>
                                    <th>Student emailid</th>
                                </tr>
                                </tbody>
                                <tbody>
                                    {
                                        this.state.students.map(
                                            students=>
                                            <tr  key={students.id}>
                                                <td> {students.firstname}</td>
                                                <td> {students.lastname}</td>
                                                <td> {students.emailid}</td>

                                            </tr>
                                        )
                                    }
                                </tbody>
                                </table>                   
                           </div>
                    </div>
            );
        }
    }

    export default ListStudentComponent;
