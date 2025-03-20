import { Cards } from "./components/Cards"
import { SideBar } from "./components/SideBar"

const MainPanel = () => {
    return (
        <section className="panel-control">
            <SideBar />
            <div className="panel-control-contenido">
                <Cards title={'FirstCard'}/>
                <Cards title={'FirstCard'}/>
                <Cards title={'FirstCard'}/>
                <Cards title={'SecondCard'}/>
                <Cards title={'SecondCard'}/>
                <Cards title={'SecondCard'}/>
                <Cards title={'ThirdCard'}/>
                <Cards title={'ThirdCard'}/> 
                <Cards title={'ThirdCard'}/>
            </div>
        </section>
    )
}

export default MainPanel