import Spinner from '../common/Spinner.jsx'

const LoadingPage = ({dataName}) =>{
    let data = dataName || "data";
    return (
        <main className="main-content">
            <h1>Loading</h1>
            <div>Retriving {data} from server...</div>
            <Spinner />
        </main>

    )
}

export default LoadingPage;