import AppInfo from '../app-info/app-info';
import SeacrhPanel from '../seacrh-panel/seacrh-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {
    const data = [
        {name: 'John C.', salary: 800, increase: false},
        {name: 'Alex M.', salary: 3000, increase: false},
        {name: 'Carl W.', salary: 15000, increase: true},
    ];

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SeacrhPanel />
                <AppFilter />
            </div>

            <EmployeesList data={data}/>

            <EmployeesAddForm />
        </div>
    );
}

export default App;