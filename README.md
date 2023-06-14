# nodebird

기말교사 과제

최대한 기존 코드와 구조를 재활용해서 사용할 생각(어떤 코드로 짜야할지 잘 모름)

# 언팔로우

필요한것 : 관계만 제거하면 됨, 팔로우 기능을 반대 방향으로 하면 된다.

view의 메인에 버튼 추가, 팔로우 추가하는 스크립트를 복붙하여 일부 수정하는것이 필요,

controllers/user에 팔로우 코드 기반으로 언팔로우 동작 코드 작성

router./user에 코드와 controllers의 unfollow관련 추가, 기존 코드랑 구성이 같으니 변수 두가지만 바꾸면 충분함

# 프로필 정보 바꾸기

필요한것 : 회원정보중 nick과 password만 바꾸게 만들면 된다.

그런데 카카오는 개인정보를 바꾸게 만드는게 좋나...? <- 로그인 전략에 따라서 표시유무의 스크립트를 넣으면 되지만 로그인 전략을 보여주는 스크립트를 모름

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

필요한것 : post의 기능을 반대 방향으로 구현해야함

구현 못함, 코드를 찾았으나 구현의 과정을 설명할 자신이 없음

# 좋아요 기능

필요한것 : follow기능을 살짝 변경 시켜서 구현해야함, models에서 user와 post를 연결해도 post에 twit-id가 없어 구현법을 모름, passport에서도 마찬가지임

구현 못함, 코드를 찾았으나 구현의 과정을 설명할 자신이 없음
