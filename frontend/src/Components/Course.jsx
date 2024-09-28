import Cards from "./Cards"
import { Link } from "react-router-dom"

import list from '../../public/list.json'

import axios from 'axios'
import { useEffect, useState } from "react"



const Course = () => {

    const [book,setBook]=useState([])


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


    return (
        <>

            <div className="max-w-screen-2xl  container mx-auto md:px-20 px-4">

                <div className="mt-28 items-center justify-center text-center">
                    <h1 className="text-2xl font-semibold md:text-4xl">We're delighted to have you <span className="text-pink-500">Here! :)</span></h1>

                    <p className="mt-12">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste aliquid esse totam voluptatum delectus et porro eveniet cum? Unde aut assumenda enim consequatur beatae recusandae ut maiores eum. Consectetur, praesentium!</p>

                    <Link to='/'>
                        <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
                    </Link>

                </div>



            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 p-10">
                {
                    book.map((data) => (

                        <Cards key={data.id} data={data} />
                    ))

                }


            </div>
        </>
    )
}

export default Course
