import React, { useState } from 'react'
import DatePicker from 'react-date-picker';
import { MultiSelect } from "react-multi-select-component";
import moment from 'moment'

//import { FormGroup, Input, Label, Form } from "reactstrap";
const ResumeField = () => {


    const options = [
        { label: "React", value: "React" },
        { label: "Javascript", value: "Javascript" },
        { label: "Angular", value: "Angular" },
        { label: "VueJs", value: "VueJs" },
        { label: "C", value: "C" },
        { label: "C++", value: "C++" },
        { label: "Python", value: "Python" },
    ];
    const language = [
        { label: "Hindi", value: "Hindi" },
        { label: "English", value: "English" },
        { label: "Marathi", value: "Marathi" }

    ];
    const [selected, setSelected] = useState([]);
    const [language_selected, setlanguage_selected] = useState([])
    const [value, onChange] = useState(new Date());
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [about, setabout] = useState('')
    const [company_name, setcompany_name] = useState('')
    const [job, setjob] = useState(' ')
    const [description, setdescription] = useState(' ')
    const [location, setlocation] = useState(' ')
    const [education_name, seteducation_name] = useState(' ')
    const [educ, seteduc] = useState(' ')
    const [abouteduc, seteducabout] = useState(' ')
    const [ProjectName, setProjectName] = useState(' ')
    const [Projectdesc, setProjectDesc] = useState(' ')
    const [ProjectRole, setProjectRole] = useState(' ')





    const dateofbirth = moment(value).format('DD/MM/YY');


    const name_func = (e) => {
        setname(e.target.value)
    }

    const email_func = (e) => {
        setemail(e.target.value)
    }

    const about_func = (e) => {
        setabout(e.target.value)
    }

    const experience_func = (e) => {
        setcompany_name(e.target.value)
    }

    const job_func = (e) => {
        setjob(e.target.value)
    }

    const desc_func = (e) => {
        setdescription(e.target.value)
    }

    const location_func = (e) => {
        setlocation(e.target.value)
    }
    return (
        <>
            <h1 className='text-center'>Resume Maker</h1>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-5'>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                                <input type="text" className="form-control" placeholder='Enter Name' onChange={name_func} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Birthday</label>
                                <br />
                                <DatePicker onChange={onChange} value={value} format='yyyy-MM-dd' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter email' onChange={email_func} />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Skills</label>
                                <MultiSelect
                                    options={options}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Languages</label>
                                <MultiSelect
                                    options={language}
                                    value={language_selected}
                                    onChange={setlanguage_selected}
                                    labelledBy="Select"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">About</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={about_func}></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Experience</label>
                                <div className=" ml-5 experience" >
                                    <label htmlFor="exampleInputPassword1" className="form-label">Company name</label>
                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Enter Company Name' onChange={experience_func} />
                                    <label htmlFor="exampleInputPassword1" className="form-label mt-3">Job Post</label>
                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Enter Job Post' onChange={job_func} />
                                    <label htmlFor="exampleInputPassword1" className="form-label mt-3">Location</label>
                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Enter Location' onChange={location_func} />
                                    <label htmlFor="exampleInputPassword1" className="form-label mt-3">Description</label>
                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Enter Description' onChange={desc_func} />
                                    <label htmlFor="exampleInputPassword1" className="form-label mt-3">isCurrent</label>
                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Enter isCurrent' />

                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Education</label>
                                <div className="mb-3 ml-5 experience" >
                                    <input type="text" className="form-control my-3" id="exampleInputPassword1" placeholder='Enter Name' onChange={(e) => seteducation_name(e.target.value)} />
                                    <input type="text" className="form-control my-3" id="exampleInputPassword1" placeholder='Enter location' onChange={(e) => seteduc(e.target.name)} />
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='about' onChange={(e) => seteducabout(e.target.value)}></textarea>

                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Projects</label>
                                <br />
                                <label htmlFor="exampleInputPassword1" className="form-label mt-3">Project Name</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder='project Name' onChange={(e) => setProjectName(e.target.value)} />
                                <label htmlFor="exampleInputPassword1" className="form-label mt-3">Project Description</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder='project description' onChange={(e) => { setProjectDesc(e.target.value) }} />
                                <label htmlFor="exampleInputPassword1" className="form-label mt-3">Project Role</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder='project Role' onChange={(e) => setProjectRole(e.target.value)} />
                            </div>

                        </form>
                    </div>



                    {/* Resume part Start here */}
                    <div className='col-7'>
                        <div className=' resume_head'>
                            <div className='resume_name'>
                                <h4 className='text-center'>{name === '' ? <p>Name</p> : name.toLocaleUpperCase()}</h4>
                            </div>
                            <div className='row'>
                                <div className='col-4 container-fluid right_part'>
                                    <h3>Personal Info</h3>
                                    <h6>Email :<span className='email_element'> {email}</span></h6>
                                    <p>Birthday: {dateofbirth}</p>
                                    <div className='my-3'>
                                        <h3>Skills</h3>
                                        <p>{selected.map((item, key) => {
                                            return <>
                                                <p key={key}>{item.value}</p>
                                            </>
                                        })}</p>
                                    </div>
                                    <div className='my-3'>
                                        <h3>Languages</h3>
                                        <p>{language_selected.map((item, key) => {
                                            return <>
                                                <p key={key}>{item.value}</p>
                                            </>
                                        })}</p>
                                    </div>
                                </div>
                                <div className='col-7'>
                                    <div className='container'>
                                        <h3>About</h3>
                                        <p>{about}</p>
                                    </div>
                                    <div className='container'>
                                        <h3>Education</h3>
                                        <p>College: {education_name}</p>
                                        <p>location : {educ}</p>
                                        <p>About : {abouteduc}</p>
                                    </div>
                                    <div className='container'>
                                        <h3>Experience</h3>
                                        <p>Company Name: {company_name}</p>
                                        <p>Job Post: {job}</p>
                                        <p>Location : {location}</p>
                                        <p>Description: {description}</p>
                                    </div>
                                    <div className='container'>
                                        <h3>Projects</h3>
                                        <p>Project Name: {ProjectName}</p>
                                        <p>Project description: {Projectdesc}</p>
                                        <p>Project Role: {ProjectRole}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ResumeField
