# API docs

## 2019 Dicon

* POST /signup ( 회원가입 )

> Params

    id : String
    
    passwd : String

    name : String

    phoneNum : String

> Response

    200 : {
        "_id": "5d9355dd22c73537d8f212c8",
        "id": "shimhg02",
        "passwd": "adad123",
        "name": "심효근",
        "phoneNum": "01011112222",
        "__v": 0
    }

    500 : { message : "ERR!" }

    
* POST /signin ( 로그인 )

> Params

    id : String
    
    passwd : String

> Response

    200 : {
        "_id": "5d9355dd22c73537d8f212c8",
        "id": "shimhg02",
        "passwd": "adad123",
        "name": "심효근",
        "phoneNum": "01011112222",
        "__v": 0
    }

    404 : { message : "not found!" }


* POST /addItem ( 아이템 추가 )

> Params

    itemName : String

    itemData : String

> Response 

    200 : {
        "_id": "5d9357187148a702747c9066",
        "itemName": "대머리 의자",
        "itemData": "대머리 데이터",
        "itemPic": "default",
        "__v": 0
    }

    500 : { message : "ERR!" }
    
* POST /searchItem ( 아이템 검색 )

> Params

    itemName : String

> Response 

    200 : {
        "_id": "5d9357187148a702747c9066",
        "itemName": "대머리 의자",
        "itemData": "대머리 데이터",
        "itemPic": "default",
        "__v": 0
    }

    404 : { message : "not found!" }

* POST /randomItem ( 랜덤 아이템 2개 )

> Response

    200 : [
        {
            "_id": "5d935f86063dd1243df31f47",
            "itemName": "빡빡이 의자",
            "itemData": "맨들맨들 거려서 미끄러진다",
            "itemPic": "default",
            "__v": 0
        },
        {
            "_id": "5d93660b32c4922486445e89",
            "itemName": "대머리 의자",
            "itemData": "건조해 보인다.",
            "itemPic": "default",
            "__v": 0
        }
    ]

* POST /allItem ( 전체 아이템 )

> Response

    200 : [{
        "_id": "5d9357187148a702747c9066",
        "itemName": "대머리 의자",
        "itemData": "민머리 맨머리 ",
        "itemPic": "default",
        "__v": 0
    }]

* POST /addIn ( 인테리어 추가 )

> Parmas

    intName : String,

    intSub : String

> Response

    200 : {
        "_id": "5d945ca438521125e0189f5e",
        "intName": "대머리 의자",
        "intSub": "탈모인 컽",
        "__v": 0
    }

    500 : { message : "ERR!" }


* POST /randomIn ( 랜덤 인테리어 2개 )

> Response

    200 : [
        {
            "_id": "5d945e8e38521125e0189f60",
            "intName": "대머리 빡빡이",
            "intSub": "머리숱 없음.",
            "__v": 0
        },
        {
            "_id": "5d945ca438521125e0189f5e",
            "intName": "대머리의 꿈",
            "intSub": "사람되기",
            "__v": 0
        }
    ]

* POST /allIn ( 전체 인테리어 )

> Response

    200 : [
        {
            "_id": "5d945ca438521125e0189f5e",
            "intName": "빡",
            "intSub": "빡이",
            "__v": 0
        },
        {
            "_id": "5d945e8e38521125e0189f60",
            "intName": "대머리 빡빡이",
            "intSub": "머리숱 없음.",
            "__v": 0
        },
        {
            "_id": "5d945eb438521125e0189f61",
            "intName": "대머리의 꿈",
            "intSub": "사람되기",
            "__v": 0
        }
    ]