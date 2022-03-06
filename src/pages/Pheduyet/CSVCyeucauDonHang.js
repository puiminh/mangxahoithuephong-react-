import React,{useState, useEffect} from 'react';

const CSVCyeucauDonHang = (props) => {
    const {id_dondk} = props;

    const [csvcs, setCsvcs] = useState([])

    const getCsvcycs = async() => {
      try {
          
          const response = await fetch(`http://localhost:5000/getcsvcycfromdondk/${id_dondk}`);
          const jsonData = await response.json()
  
          setCsvcs(jsonData)
          
          console.log('csvc:', id_dondk,jsonData);
      } catch (error) {
          console.error(error.message);
      }
  }

    useEffect(()=>{
      getCsvcycs();
    },[])
  return            <div>
                                      <table class="table border">
                                        <thead>
                                            <tr>
                                                <th scope="col">Tên</th>
                                                <th scope="col">Số lượng</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                            {csvcs.map((csvc)=>{
                                            return <tr>
                                                <th scope="row">{csvc.ten_csvc}</th>
                                                <td>{csvc.qty}</td>
                                            </tr>
                                            })}

                                        </tbody>
                                        
                                    </table>
                                    {(csvcs.length===0)&&<h6 class="text-muted text-center">Đơn này không yêu cầu cơ sở vật chất gì</h6>}
                            </div>;
};

export default CSVCyeucauDonHang;
