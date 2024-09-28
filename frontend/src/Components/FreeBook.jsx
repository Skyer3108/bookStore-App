
// import list from '../../public/list.json'
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import { useEffect, useState } from 'react';


const FreeBook = () => {

  const [book,setBook]=useState([])

    // const filterData = list.filter((data) => {
    //     return data.category === 'Free'
    // })

     const filterData = book.filter((data) => {
        return data.category === 'Free'
    })

    useEffect(()=>{

      const fetchBooks=async()=>{

          try{

             const res=await axios.get('https://book-store-backend-paz7.onrender.com/api/book')

             setBook(res.data.data)

             console.log(res.data.data,'data')
             console.log(book)



          }catch(err){

              console.log(err)

          }

      }

      fetchBooks()


  },[])

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }

    console.log(filterData)
    return (
        <>
            <div className='max-w-screen-2xl  container mx-auto md:px-20 px-4'>

                <div className=''>
                <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>

<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione odio laudantium veniam dicta aperiam? Laboriosam fugit exercitationem reprehenderit, ea ipsa facilis alias sit doloribus consequat</p>

                </div>
             

         

            <div>
            <Slider {...settings}>

                {
                    filterData.map((data)=>(

                        <Cards data={data} key={data.id}/>

                    ))
                }
        
         
        
        
      </Slider>


            </div>
            </div>


        </>
    )
}

export default FreeBook
