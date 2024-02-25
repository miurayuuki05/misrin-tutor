"use client"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useEffect, useState } from "react"
import getTutor from "@/app/middleware/getTutor"

export default function Page(){
    const [tutors, setTutors] = useState<any[]>([])
    const [exist, setExist] = useState<boolean>(true)
    const [gradeVal, setGrade] = useState<number>(0)
    const [subjectVal, setSubject] = useState("null")
    const handleGrade = (e : any) => {
        setGrade(e.target.value)
    }

    const handleSubject = (e : any) => {
        setSubject(e.target.value)    
    }

    async function fetchTutors(){
        let data = await getTutor()
        if(gradeVal == 0 && subjectVal === "null"){
            setExist(true)
            setTutors(data)
        }else{
            let finalData : any = []
            data.map(
                (tutor : any) => {
                    let inputs : string = "null"
                    let grade = tutor.grades
                    let subject = tutor.subject
                    grade.map((grade : number) => {
                        let gradeL : number = grade
                        if(gradeL == gradeVal){
                            inputs = "yes"
                            finalData.push(tutor)
                        }
                    })
                    if(inputs === "null"){
                    subject.map((sub : string) => { 
                        let subL = sub.toLowerCase()
                        if(subL === subjectVal){
                            finalData.push(tutor)
                        }
                    })
                    }
                }
            )
            console.log(finalData)
            setTutors(finalData)
        }
        
    } 
    useEffect(() => {
        fetchTutors()

    }, [gradeVal, subjectVal])

    return(
        <div>
            <Navbar />
            <section className="mt-36">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold text-center">Find a Tutor</h1>
                    <p className="text-center text-gray-600 mt-2">Find the perfect tutor for your child's needs</p>
                    <div className="flex justify-center mt-8">
                        <form>
                            <select className="w-full border-2 border-gray-200 bg-gray-700 text-white p-3" name="subject" value={subjectVal} onChange={handleSubject} >
                                <option value={"null"}>Choose a subject</option>
                                <option value={"math"}>Math</option>
                                <option value={"science"}>Science</option>
                                <option value={"english"}>English</option>
                                <option value={"history"}>History</option>
                                <option value={"art"}>Art</option>
                            </select>
                            <select className="w-full border-2 border-gray-200 bg-gray-700 text-white p-3" name="grade" value={gradeVal} onChange={handleGrade}>
                                <option value={0}>Choose a grade</option>
                                <option value={"kindergarten"}>Kindergarten</option>
                                <option value={1}>1st Grade</option>
                                <option value={2}>2nd Grade</option>
                                <option value={3}>3rd Grade</option>
                                <option value={4}>4th Grade</option>
                                <option value={5}>5th Grade</option>
                                <option value={6}>6th Grade</option>
                                <option value={7}>7th Grade</option>
                                <option value={8}>8th Grade</option>
                                <option value={9}>9th Grade</option>
                                <option value={10}>10th Grade</option>
                                <option value={11}>11th Grade</option>
                                <option value={12}>12th Grade</option>
                            </select>
                        </form>
                    </div>
                </div>
                <div>
                    <h1 className="text-4xl font-bold text-center mt-8">Tutors</h1>
                    <div className="flex justify-center mx-auto flex-wrap w-[90%] bg-green-100 rounded-md p-20">
                        {exist ? tutors && tutors.map((tutor : any, index : number) => {
                            if(tutor === undefined){
                                return
                            }else{
                            return(
                                <div key={index} className="bg-slate-800 w-[300px] h-[300px] m-4 rounded-md">
                                    <img src={tutor.profileImages.url} alt="tutor" className="w-full h-[200px] object-cover rounded-t-md"/>
                                    <div className="p-4">
                                        <p className="text-white font-bold">{tutor.username}</p>
                                        <div className="text-gray-400">
                                        {tutor.subject.map((sub : string, index : number) => {
                                            return(
                                                <>
                                                {sub},
                                                </>
                                            )
                                        })}
                                        </div>
                                        <div className="text-gray-400">
                                            <p>Grades : 
                                            {tutor.grades.map((grade : number, index : number) => {
                                                return(
                                                    <>
                                                    {grade},
                                                    </>
                                                )
                                            })}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        }) : <div className="p-32 w-[90%] text-center animate-pulse bg-neutral-300"></div>}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}