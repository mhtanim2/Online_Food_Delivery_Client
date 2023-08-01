//BaseURL= "http://localhost:4000/api/v1"

export async function CategoryListRequest() {
  // try {
  //   let URL = "http://localhost:4000/api/v1/ItemCategoryList";

  //   const result = await axios.get(URL);
  //   if (result.status === 200 && result.data["status"] === "success") {
  //     if (result.data["data"].length > 0) {
  //       store.dispatch(SetCategoryList(result.data["data"]));
  //       store.dispatch(SetCategoryListTotal(result.data["data"][0]['Total'][0]['count']));
  //     } else {
  //       store.dispatch(SetCategoryList([]));
  //       store.dispatch(SetCategoryListTotal(0));
  //       errorToast("No Data Found");
  //     }
  //   } else {
      
  //     errorToast("Something Went Wrong");
  //   }
  // } catch (e) {
  //   errorToast("Something Went Wrong");
  // }
}



export async function ItemListRequest(searchKeyword) {
    // try {
    //     let URL = "http://localhost:4000/api/v1/ItemList/"+searchKeyword;
    //     const result = await axios.get(URL)
    //     if (result.status === 200 && result.data['status'] === "success") {
    //         if (result.data['data'][0]['Rows'].length > 0) {
    //             store.dispatch(SetItemList(result.data['data'][0]['Rows']))
                
    //             store.dispatch(SetItemListTotal(result.data['data'][0]['Total'][0]['count']))
    //         } else {
    //             store.dispatch(SetItemList([]))
    //             store.dispatch(SetItemListTotal(0))
    //             errorToast("No Data Found")
    //         }
    //     } else {
    //         errorToast("Something Went Wrong")
    //     }
    // }
    // catch (e) {
    //     errorToast("Something Went Wrong")
        
    // }
}
