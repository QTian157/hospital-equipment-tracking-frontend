import ErrorPage from "../ErrorPage";
import LoadingPage from "../LoadingPage";

const EquipmentListPage = ({equipmentList, isLoading, equipListError}) =>{
    // console.log(equipmentList);
    if (isLoading) {
        return (<LoadingPage dataName={'equipment'}/>)
    }else if (equipListError) {
        return (
        <ErrorPage>
            {equipListError}
        </ErrorPage>
        )
    }
    return (
        <div>
            EquipmentListPage
            <ul>
                {equipmentList.map((e)=> <li key={e.id}>{e.name}</li>)}
            </ul>
            <table>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>ASSET TAG</th>
                        <th>STATUS</th>
                        <th>DEPARTMENT</th>
                        <th>ROOM</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>NAME</td>
                        <td>ASSET TAG</td>
                        <td>STATUS</td>
                        <td>DEPARTMENT</td>
                        <td>ROOM</td>
                        <td>ACTION</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default EquipmentListPage;