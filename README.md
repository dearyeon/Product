# Product Repository

실제로 개발할 때 사용할 공용 레포지토리입니다.  

모든 팀의 개발 내용들은 해당 레포지토리에서 독립적인 디렉토리를 사용해서 개발할 예정입니다.  

팀별로 독립적이라는 전제 하에 하나의 레포에서 서로 다른 작업을 하는 것은 문제가 되지 않을 것입니다.  


## 기본적으로 각 팀 디렉토리는 따로 존재합니다.

- API : Back-end API 팀
- Server: Server & DB 팀
- Layout: Front-end 팀

> 작명 센스 죄송합니다... 수정 가능해요... 물론 레포지토리 이름도... - IMRaccoon

팀 별 디렉토리의 **README.md**는 의무적으로 작성 부탁드리며, 

개발 시, 사용했던 **모듈들의 버전** (typescript: v.3.7.4 ...)

그리고 **수행 명령어** 를 기본적으로 부탁드립니다.

예를 들면,
```zsh
cd API/joongna        # 중고나라 디렉토리로 접근합니다.
npm install           # 필요한 모듈들을 먼저 설치해줍니다.
npm build             # 소스코드를 기반으로 빌드해줍니다.
PORT=3001 npm start   # 3001번 포트를 기반으로 실행됩니다.
```

Git Ignore 파일도 따로 운용할 예정이며, 

빌드된 결과물을 올리지 않습니다. 즉, 소스 코드만 올리는 걸 목표로 합니다.


## 기본적인 코딩 컨벤션

> 기본적으로 정해진 팀 별 디렉토리명을 제외하고는 공동으로 사용합니다.

- 디렉토리명은 snake_case => ex) product_scrap 

- 파일명은 기본적으로 (camelCase).(기능 또는 없어도 됨).(확장자) => ex) productScrap.component.ts, mappingToSite.ts

- 변수명은 snake_case => ex) `const num_arr : number[] = [1, 2, 3];`

- 함수명은 camelCase => ex) `const addOne = (target: number) => target + 1;`

- interface 또는 그외 유사한 선언형 사용 시에는 PascalCase => `type Target = 1; Interface ProducrInformation { ... }`


## 브랜치 관리

- 이제 중앙 관리형 레포지토리를 사용하기 때문에 함부로 merge 하지 않습니다.

- Merge 권한은 각 팀장들에게만 부여할 예정이며

- 각 팀원들이 짠 코드들의 리뷰어는 해당 팀 전원이며, 

- 그 중 50% 이상의 인원이 확인하고 승인(approve)했을 시에 허용합니다.

- 취약한 코드를 짜지 않도록 유의해주세요!!
