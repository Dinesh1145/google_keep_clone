import React, { useState } from 'react'
import Note from './Note'
import PinnedNote from './PinnedNote'


export const NoteSavedBox = (props) => {
    const [pinArray, setpinArray] = useState([]);
    // const [isElePinned, setisElePinned] = useState(false);

    // pinArray!==[] ?  setisElePinned(true) : setisElePinned(false)

    const deleteItem = (id) => {
        props.deleteItemApp(id);
        // console.log(id)
    }
    const deletePinItem = (id) => {
        const newList = pinArray.filter((val, index) => {
            return index !== id;
        })
        setpinArray(newList);
        // pinArray!==[] ?  setisElePinned(false) : setisElePinned(true);
    }

    const pinFlagFun = (id) => {
        let filterArr = props.array.find((curr, index) => index === id)
        props.array.splice(id, 1)
        //adding elements in pinned array 
        setpinArray((pre) => {
            return [...pre, filterArr]
        })

        // pinArray!==[] ?  setisElePinned(true) : setisElePinned(false)

    }
    // console.log(isElePinned)
    // console.log(pinArray)
    const pinRemoveFun = (id) => {
        // pinArray.splice(id,1);
        let noteRpin = pinArray.find((curr, index) => index === id)
        props.array.unshift(noteRpin);
        deletePinItem(id);
    }

    return (
        <>
            <div className="container d-flex flex-column mt-3">
                <div className=" pt-1" style={{ paddingLeft: "25px" }}>
                    {pinArray.length !== 0 ?
                        <>
                            <p className="pb-0"> Pinned</p>
                            <hr className="bg-dark" style={{ margin: "0" }} />
                        </> : null}
                </div>

                <div className="container d-flex justify-content-lg-center align-items-start flex-wrap m-auto ">

                    {pinArray.map((val, index) => {
                        return <PinnedNote key={index}
                            id={index}
                            title={val.title}
                            text={val.text}
                            deleteProp={deletePinItem}
                            pinRemove={pinRemoveFun}
                            classAdd="" />
                    })}
                </div>
            </div>
            {/* <PinnedNote/> */}
            <div className="container d-flex flex-column mt-3">
                <div className=" pt-1" style={{ paddingLeft: "25px" }}>
                    {pinArray.length && props.array.length !== 0 ?
                        <>
                            <p className="pb-0">Others</p>
                            <hr className="bg-dark" style={{ margin: "0" }} />
                        </> : null}
                </div>
                {props.newViewProps ?
                    <div className="container d-flex justify-content-lg-center align-items-start flex-wrap mt-3 m-auto">
                        {props.array.map((val, index) => {
                            return <Note key={index}
                                id={index}
                                title={val.title}
                                text={val.text}
                                deleteProp={deleteItem}
                                pinFlag={pinFlagFun}
                                classAdd="" />
                        })}
                    </div> :
                    <div className="container grid_view_box justify-content-center">
                        {props.array.map((val, index) => {
                            return <Note key={index}
                                id={index}
                                title={val.title}
                                text={val.text}
                                deleteProp={deleteItem}
                                classAdd="newNoteClass" />
                        })}
                    </div>}
            </div>
        </>
    )
}
