import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">

            <NotesAppBar />

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"

                >

                </input>

                <textarea
                    placeholder="happened today"
                    className="notes__textarea"
                    autoComplete="off"
                >
                </textarea>
                <div className="notes__imge">


                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa4dzVqm-eindr4CozdipHHPY5TULbl9kaSQ&usqp=CAU"
                        alt="image"
                    />
                </div>

            </div>
        </div>
    )
}
