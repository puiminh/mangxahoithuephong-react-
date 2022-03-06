import React, {useState, useEffect} from 'react';
import CsvcCard from './CsvcCard';
const ListCsvcCard = (props) => {

    const {id_phong} = props;
    const [csvcs, setCSVC] = useState([]);

    const getCSVC = async() => {
        try {
            // const id_phong = parseInt(localStorage.getItem("id_phong"));
            const response = await fetch(`http://localhost:5000/getcsvcfromnvh/${id_phong}`);
            const jsonData = await response.json()

            setCSVC(jsonData);

            console.log('Csvc:',id_phong, jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }

    const deleteCsvc = async (id_csvc) => {
        try {
            const id = parseInt(id_csvc)
            const deleteCsvc = await fetch(`http://localhost:5000/deletecsvc/${id}`, {
                method: "DELETE"
            });

            setCSVC(csvcs.filter( (csvc) =>{
                return csvc.id_csvc  !== id_csvc
            }))

        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(()=>{
        getCSVC();
    },[])

    return <div>
    {csvcs.map((csvc)=>{
        return <CsvcCard
            key = {csvc.id_csvc}
            id = {csvc.id_csvc}
            csvc = {csvc}
            deleteFunc = {deleteCsvc}
            />
    })}
    </div>
};

export default ListCsvcCard;
