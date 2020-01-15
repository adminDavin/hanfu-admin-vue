import Axios from "axios";



//获取订单详情


 //订单查询
//  function querys(id) {
//    let params = {
//      params: {
//         id:id
//      }
//    }
//    return Axios.get("/order/order/query", params);
//  }
// 



//用户更新
function update(params){
     let fd=new FormData();
     fd.append("address","天津");
     fd.append("birthDay",params.birthDay);
     fd.append("email",params.email);
     fd.append("fileInfo",params.fileInfo);
     fd.append("nickName",params.nickName);
     fd.append("realName",params.realName);
     fd.append("region",params.region);
     fd.append("requestId",params.requestId);
     fd.append("sex",params.sex);
     fd.append("timestamp",params.timestamp);
     fd.append("token",params.token);
     fd.append("userId",params.userId);
     fd.append("username",params.username);
     return Axios.post("/user/user/update",fd,{reponseType:'arraybuffer'});
}

    //更新用户地址
     function updateAddress(params){
          let fd=new FormData();
          fd.append("contact",params.contact);
          fd.append("hfAddressDetail",params.hfAddressDetail);
          fd.append("hfCity",params.hfCity);
          fd.append("hfConty",params.hfConty);
          fd.append("hfDesc",params.hfDesc);
          fd.append("hfProvince",params.hfProvince);
          fd.append("id",params.id);
          fd.append("isFaultAddress",params.isFaultAddress);
          fd.append("phoneNumber",params.phoneNumber);
          fd.append("userId",params.userId);
          return Axios.post("api/user/address/updateAddress",fd,{reponseType:'arraybuffer'});
     }
   //查询收货地址详情
   function addressDetail(detail){
     let params={
         params:{
         id:detail.id
       }
     }
     return Axios.get("api/user/address/addressDetail",params)
 }
 //搜索
 function Search(search){
     let params={
         params:{
        phoneNumber:search.phoneNumber
       }
     }
     return Axios.get("api/user/address/searchAddress",params)
 }

//上传
function File(params){
     let fd=new FormData();

     fd.append("fileInfo",params.fileInfo);
     return Axios.post("/user/user/update",fd,{reponseType:'arraybuffer'});
}

//收货地址
 function address(address_action){
     let params={
       params:{
            contact:address_action.contact,
            hfAddressDetail:address_action.hfAddressDetail,
            hfCity:address_action.hfCity,
            hfConty:address_action.hfConty,
            hfProvince:address_action.hfProvince,
            hfDesc:address_action.hfDesc,
            id:address_action.id,
            isFaultAddress:address_action.isFaultAddress,
            phoneNumber:address_action.phoneNumber,
            userId:address_action.userId
       }
     }
     return Axios.get("/api/user/address/addAddress",params)
 }

//


//登录
function login(login) {
  let params = {
    token: ""
  };
  if (login.loginType == '用户名') {
    params['authKey'] = login.loginName;
    params['passwd'] = login.password;
    params['authType'] = '1';
  } else {
    params['authType'] = '2';
    params['passwd'] = "";
    params['authKey'] = login.loginName;
  }
  console.log(params, login);
  return Axios.get("/user/user/login", { params: params });
}
//注册

function register(regi_ster){
    let params={
      params:{
        authType:regi_ster.authType,
        authKey:regi_ster.passwd,
        passwd:"admin",

      }
    }
    return Axios.get("/api/user/register",params)
}
        //删除
        function remove(remove){
          let params={
            params:{
                id:remove
            }
          }
          return Axios.get("/user/user/address/deleteAddress",params)
        }
      //用户地址列表

       function list(list){
         let params={
           params:{
              token:list.token,
              userId:list.userId
           }
         }
         return Axios.get("/user/user/address/queryAddress",params)

       }



export default {
  login:login,
  register:register,
  update:update,
  address:address,
  remove:remove,
  list:list,
  File:File ,
  updateAddress:updateAddress,
  addressDetail:addressDetail,
  Search:Search,
  // querys:querys
}
