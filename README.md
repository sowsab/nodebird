# nodebird

기말교사 과제

최대한 기존 코드와 구조를 재활용해서 사용할 생각(어떤 코드로 짜야할지 잘 모름)

# 언팔로우

필요한것 : 관계만 제거하면 됨

view의 메인에 버튼 추가, 팔로우 추가하는 스크립트를 복붙하여 일부 수정하는것이 필요,

controllers/user에 팔로우 코드 기반으로 언팔로우 동작 코드 작성

router./user에 코드와 controllers의 unfollow관련 추가, 기존 코드랑 구성이 같으니 변수 두가지만 바꾸면 충분함

# 프로필 정보 바꾸기

필요한것 : 회원정보중 nick과 password만 바꾸게 만들면 된다.

그런데 카카오는 개인정보를 바꾸게 만드는게 좋나...?

view의 profile에서 join의 코드를 복붙하고 일부 코드 제거하고, 변수도 프로필 정보 바꾸는것으로 변경함

controllers/auth에서 join의 코드를 복붙하고 계정 정보 유무 코드 제거 후

로그인한 정보를 찾는 변수로 변경, create코드를 update로 변경.

routes/auth의 코드는 기존 코드를 참고하여 추가함

# 사용자 이름 누르면 해당 사용자 게시글만 보여주는 기능

필요한것 : hashtag 검색을 user 검색으로 갈아버리는것.

controllers/page의 renderHashtag을 renderUser로 복붙후 일부 변수과 값을 바꾸는것으로 쉽게 구현함

routes/page에 controller를 참조하게 코드 수정후

view/main에서 해시태그 검색기능을 복사후 input 부분만 남겨두고 input type을 submit으로 바꿈 그리고 값을 기존의 twit-author부분의 변수를 복붙함

# 게시글 삭제

필요한것 : db에서 post를 삭제하는것

어떻게 해야할지 막막해서 예시에서 html 코드 복붙함

두가지 변수(?) post와 user관련으로 필요한것을 찾음

controllers/post에서 post 함수를 일반 복붙하고 db관련 변수 수정과 추가를해서 userid와 해당 post를 선택하게 함

post 관련으로 post를 추가하는 명령어을 삭제 관련으로 바꿈

routes에서 controller와 view를 연결함 route.post를 쓰니 오류가 터져 route.delete를 찾고 바꿈

hashtag관련으로 오류가 나와 hashtag관련을 전부 제거함

정상 동작함

아쉬운것 : 이미지 올린거 어떻게 삭제할지는 모름.. 삭제후에 해당 포스트의 이미지를 삭제하는 명령어를 어떻게 짤지 모르겠음...

# 좋아요 기능

아쉽게도 구현 못함, 구현하는 코드를 찾긴 찾았는데 복붙해도 설명을 적을 자신이 없음...
