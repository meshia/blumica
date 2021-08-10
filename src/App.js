
import './App.css';
import * as ReactBootStrap from 'react-bootstrap';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const App = () => {
    const employees = [
        {
            'ID': '20348921',
            'fullName': 'יואב שרון',
            'overtimeHours': '4:00',
            'manualHours': '4:00',
            'hours': '155',
            'sumOfhours': '155'
        },
        {
            'ID': '20348922',
            'fullName': 'יואב שרון',
            'overtimeHours': '4:00',
            'manualHours': '4:00',
            'hours': '155',
            'sumOfhours': '155'
        },
        {
            'ID': '20348923',
            'fullName': 'יואב שרון',
            'overtimeHours': '4:00',
            'manualHours': '4:00',
            'hours': '155',
            'sumOfhours': '155'
        },{
            'ID': '20348924',
            'fullName': 'יואב שרון',
            'overtimeHours': '4:00',
            'manualHours': '4:00',
            'hours': '155',
            'sumOfhours': '155'
        }
    ];
    const renderEmployees = ( employee, index ) => {
        return(
            <Draggable key={index} draggableId={employee.ID} index={index}>
                {(provided) => (
                <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    <span> <button></button> <button></button> </span>
                    <span>{ employee.sumOfhours }</span>
                    <span>{ employee.hours }</span>
                    <span>{ employee.manualHours }</span>
                    <span>{ employee.overtimeHours }</span>
                    <span>{ employee.fullName }</span>
                    <span>{ employee.ID }</span>
                </li>
                )}
            </Draggable>
        )
    }
  return (
    <div className="App">
        <DragDropContext>
            <Droppable droppableId="employeesItems">
                { (provided) => (
                <ul {...provided.droppableProps} ref={provided.innerRef}>
                    <li>
                        <span>אפשרויות</span>
                        <span>סך כל שעות</span>
                        <span>שעות</span>
                        <span>שעות ידניות</span>
                        <span>שעות חריגות</span>
                        <span>שם עובד</span>
                        <span>מספר ת.ז.</span>
                    </li>
                    { employees.map( renderEmployees ) }
                    { provided.placeholder }
                </ul>
                )}
            </Droppable>
        </DragDropContext>
    </div>
  );
}

export default App;
