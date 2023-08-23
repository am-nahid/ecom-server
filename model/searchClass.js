// class searchFeatures{
//     constructor(query,queryStr){
//         this.query = query
//         this.queryStr = queryStr
//     }

//     search() {
//         const keyword = this.queryStr.keyword 
//         // console.log(keyword)
//         ? 
//         {
//             name: {
//                 $regex:this.queryStr.keyword,
//                 $options:"i"
//             }
//         } 
//         :
//          {}
//         this.query= this.query.find({...keyword})
//         return this
//     }
// }

// module.exports = searchFeatures


class SearchFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    search() {
        if (this.queryStr.keyword) {
            const keyword = {
                $regex: this.queryStr.keyword,
                $options: "i",
            };

            const searchByKeyword = {
                $or: [
                    { p_name: keyword },
                    { search_category: keyword },
                    { category: keyword },
                ],
            };

            this.query = this.query.find(searchByKeyword);
        }

        return this;
    }
}

module.exports = SearchFeatures;

