import Brand from '../assets/icon-brand-recognition.svg'
import '../Statistics.css'

const Statistics = () => {
    const stats = [
        {
            icon: Brand,
            title: "Brand Recognition",
            detail: "Boost your recognition with each click. Generic link don't mean a thing. Branded links helps instil confidence in your content.",
        },
        {
            icon: Brand,
            title: "Brand Recognition",
            detail: "Boost your recognition with each click. Generic link don't mean a thing. Branded links helps instil confidence in your content.",
        },
        {
            icon: Brand,
            title: "Brand Recognition",
            detail: "Boost your recognition with each click. Generic link don't mean a thing. Branded links helps instil confidence in your content.",
        },
    ]
  return (
    <>
    <main>
        <div className='setWidth'>
        <form>
            <input type="text" placeholder='Shorten a link here' />
            <button>Shorten it!</button>
        </form>
        <aside>
            <h3>Advanced Stastistics</h3>
            <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
            <div className='card-container'> 
            <div className='line'></div>   
                {stats.map((stat,index)=>{
                    return (
                        <div key={index} className='card'>
                            <div className='img-container'>
                                <img src={stat.icon} alt={stat.title} />
                            </div>
                            <h4>{stat.title}</h4>
                            <p>{stat.detail}</p>
                        </div>
                    )
                })}
            </div>
        </aside>
        </div>
    </main>
    </>
  )
}

export default Statistics