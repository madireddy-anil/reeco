import style from './index.module.css'
import OrderOverView from './OrderOverView/OrderOverView'
import OrdersList from './OrdersList/OrdersList'
import OrderNumberCard from './OrderNumberCard/OrderNumberCard'
import Header from '../Components/Header/Header'

function Main() {
  return (
    <div style={{ background: '#f6f6f8' }}>
      <Header />
      <OrderNumberCard />

      <div className={style['main']}>
        <OrderOverView />
        <OrdersList />
      </div>
    </div>
  )
}

export default Main
