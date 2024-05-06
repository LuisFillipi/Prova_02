import Card from "../Card/Card";
import './App.css'

const data = {
    page1: {
      title: "How did we do?",
      value: "Please let us know how we did with your support request. all feedback is appreciated to help us improve our offering!"
    },
}

const App = () => {
    return (
        <>
        <main>
            <Card title={data.page1['title']} value={data.page1['value']} />
        </main>
        </>
    );
}
export default App;