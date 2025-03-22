import { Cards } from "./components/Cards"
import { SideBar } from "./components/SideBar"

const MainPanel = () => {
    return (
        <section className="panel-control">
            <SideBar />
            <div className="panel-control-contenido">
                <Cards title={'Titulo'}/>
                <Cards title={'Titulo'}/>
                <Cards title={'Titulo'}/>
                <Cards title={'Titulo'}/>
                <Cards title={'Titulo'}/>
                <Cards title={'Titulo'}/>
                <Cards title={'Titulo'}/>
                <Cards title={'Titulo'}/> 
                <Cards title={'Titulo'}/>
            </div>
        </section>
    )
}

export default MainPanel