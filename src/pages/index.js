/**
 * title: 首页
 */
import {getAllStudents} from "@/services/student.js"
import React from 'react'

export default function index() {
    getAllStudents().then(res => {
        console.log(res);
    })
    return (
        <div>
            <h1>首页1 </h1>
        </div>
    )
}
