import {useState,useRef,useEffect} from 'react';
import Navbar from "../../components/Navbar";
import {useRouter} from "next/router";
import axios from "axios";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {AvForm, AvField} from "availity-reactstrap-validation";
import {basicPath} from "../../Resources/constants";

function Events(props) {
    const [myEvents,setMyEvents] = useState(props.events);
    const [itIsAll,setItIsAll] = useState(true);
    const [myCategory,setMyCategory] = useState('');
    const router = useRouter(); const addEventRef = useRef();
    const [editModalIsOpen,setEditModalIsOpen] = useState(false);
    const [editingIndex,setEditingIndex] = useState(-1);
    const [addEventIsOpen,setAddEventIsOpen] = useState(false);
    const [count,setCount] = useState(1);

    useEffect(()=>{
        let path = router.asPath;
        let category = path.substring(path.indexOf('category=')+9,path.length);
        goToCategory(category)
    },[]);

    const goToCategory = async (category) => {
        if (category!=='') {
            setMyCategory(category);
            const response = await fetch(`${basicPath}?category=${category}`);
            const events = await response.json();
            setMyEvents(events); setItIsAll(false)
        } else {
            setMyCategory('');
            const response = await fetch(basicPath);
            const events = await response.json();
            setMyEvents(events); setItIsAll(true)
        }
        if (category==='') {
            router.push(`/events`,undefined, {shallow: true});
        } else {
            router.push(`/events?category=${category}`,undefined, {shallow: true});
        }
    };
    function deleteE(id) {
        axios.delete(basicPath+'/'+id).then((response)=>{
            getDataAgain()
        })
    }
    function editE(index){
        setEditingIndex(index);
        changeEditModal()
    }
    function editSubmit(event,value) {
        axios.put(basicPath+'/'+myEvents[editingIndex].id,value).then((response)=>{
            getDataAgain()
        });
        changeEditModal()
    }
    function changeEditModal() {
        setEditModalIsOpen(!editModalIsOpen)
    }
    function changeAddEvent() {
        setAddEventIsOpen(!addEventIsOpen);
        setCount(1)
    }
    function addSubmit(event,value) {
        for (let i=0; i<count; i++) {
            axios.post(basicPath,value).then((response)=>{
                getDataAgain();
            });
        }
        changeAddEvent()
    }
    function getDataAgain() {
        if (!itIsAll) {
            axios.get(`${basicPath}?category=${myCategory}`).then((response2)=>{
                setMyEvents(response2.data)
            })
        } else {
            axios.get(basicPath).then((response2)=>{
                setMyEvents(response2.data)
            })
        }
    }
    function inputChange(event) {
        setCount(event.target.value)
    }
    
    return (
        <Navbar>
            <div className="container mt-5">
                <div className="d-flex justify-content-center mb-4">
                    <button onClick={changeAddEvent} className="btn btn-primary btn-lg" type={'button'}>
                        Add event
                    </button>
                </div>
                {addEventIsOpen ?
                    <div className="fillForm">
                        <AvForm onValidSubmit={addSubmit} ref={addEventRef}>
                            <AvField required className="mt-3" placeholder="Category" type="text" name={'category'}/>
                            <AvField required className="mt-3" placeholder="Entering price" type="number" name={'enteringPrice'}/>
                            <input onChange={inputChange} min={1} max={5} value={count} className="form-control mt-3" type="number"/>
                            <div className="d-flex justify-content-end mt-3">
                                <div>
                                    <button type="submit" className="btn btn-success"> Add </button>
                                    <button onClick={changeAddEvent} type="button" className="btn btn-primary ms-2"> Close </button>
                                </div>
                            </div>
                        </AvForm>
                    </div> : null}
                <div className="topPart">
                    <div onClick={()=>goToCategory('')} className="button">
                        All
                    </div>
                    <div onClick={()=>goToCategory('food')} className="button">
                        Only foods
                    </div>
                    <div onClick={()=>goToCategory('sport')} className="button">
                        Only sport
                    </div>
                    <div onClick={()=>goToCategory('dance')} className="button">
                        Only dance
                    </div>
                </div>
                <div className="events">
                    {myEvents.map((item,index)=>(
                        <div className="card me-2 ms-2 mt-3" key={item.id}>
                            <div className="card-header bg-primary text-white text-center">
                                <h4> {item.id} </h4>
                            </div>
                            <div className="card-body">
                                <div> <b>Category: </b> {item.category} </div>
                                <div> <b>EnteringPrice: </b> {item.enteringPrice} </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between align-items-center">
                                <button onClick={()=>deleteE(item.id)} className="btn btn-danger" type="button"> Delete </button>
                                <button onClick={()=>editE(index)} className="btn btn-warning text-white" type="button"> Edit </button>
                            </div>
                        </div>
                    ))}
                </div>
                <Modal isOpen={editModalIsOpen} toggle={changeEditModal}>
                    <ModalHeader className="w-100 bg-warning text-white d-flex justify-content-center">
                        Edit event
                    </ModalHeader>
                    <ModalBody>
                        <AvForm onValidSubmit={editSubmit} model={myEvents[editingIndex]}>
                            <AvField required className="mt-3" placeholder="Category" type="text" name={'category'}/>
                            <AvField required className="mt-3" placeholder="Entering price" type="number" name={'enteringPrice'}/>
                            <div className="d-flex justify-content-end mt-3">
                                <div>
                                    <button type="submit" className="btn btn-warning text-white"> Edit </button>
                                    <button onClick={changeEditModal} type="button" className="btn btn-primary ms-2"> Close </button>
                                </div>
                            </div>
                        </AvForm>
                    </ModalBody>
                </Modal>
            </div>
        </Navbar>
    )
}

export default Events

export async function getServerSideProps(context) {
    const response = await fetch(`http://localhost:5000/events`); /*console.log(response);*/
    const events = await response.json(); /*console.log(oneUser);*/

    return {
        props: {events}
    }
}