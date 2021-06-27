import "./Add-recipe-page.css"
import React, {useState} from "react";
import { useForm } from "react-hook-form";
import {BsTrashFill} from "react-icons/bs";
import {useHistory} from "react-router-dom";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

function AddRecipeStep2() {
    const history= useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [indexes, setIndexes] = useState([0]);
    const [counter, setCounter] = useState(1);

    const previousStep = () => {
        history.push("/add-recipe/step-1");
    }

    const onSubmit = (data) => {
        console.log(data);
        history.push("step-3")
    };

    const addIngredient = () => {
        setIndexes((prevIndexes) => [...prevIndexes, counter]);
        setCounter((prevCounter) => prevCounter + 1);
    };

    const removeIngredient = (index) => () => {
        setIndexes((prevIndexes) => [
            ...prevIndexes.filter((item) => item !== index)
        ]);
        setCounter((prevCounter) => prevCounter - 1);
    };

    const clearIngredients = () => {
        setIndexes([]);
    };
    console.log(indexes);
    return (
        <>
            <div className="page-wrapper">
                <div className="page-wrapper-inner">
                    <h1>Add the ingredients</h1>
                    <div className="add-ingredient-wrapper">
                        <form onSubmit={handleSubmit(onSubmit)} className="add-ingredient-form">
                            {indexes.map((index) => {
                                const fieldName = `ingredient_${index}`;
                                return (
                                    <div key={fieldName}>
                                        <div className="ingredient-input-holder">
                                            <Input
                                                name={`${fieldName}`}
                                                labelId="testId"
                                                register={register}
                                                placeholder="Add an ingredient"
                                                type="text"
                                                errors={errors}
                                            />
                                            <Button
                                                type="button"
                                                buttonTitle={<BsTrashFill className="eraserIcon"/>}
                                                classNameButton="btn remove"
                                                onClickEvent={removeIngredient(index)}
                                            />
                                        </div>

                                    </div>
                                )
                            })}
                            <div className="list-control-wrapper">
                                <Button
                                    type="button"
                                    buttonTitle="Add ingredient"
                                    onClickEvent={addIngredient}
                                    classNameButton="btn"
                                />
                                <Button
                                    type="button"
                                    buttonTitle="Clear ingredient list"
                                    onClickEvent={clearIngredients}
                                    classNameButton="btn clear"
                                />
                            </div>
                            <div className="button-wrapper">
                                <Button
                                    classNameButton="btn cancel"
                                    buttonTitle="Previous step"
                                    type="submit"
                                    onClickEvent={previousStep}
                                />
                                <Button
                                    buttonTitle="Save and continue"
                                    type="submit"
                                    classNameButton="btn save-and-continue"
                                />
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}
export default AddRecipeStep2;