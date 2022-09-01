# 원티드 프리온보딩 2팀

> 김주탁, 류하준, 윤영주, 이형민, 조남경, 하성화, 강주희, 변지윤

## 데모

[🌎 데모 페이지](https://wanted-pre-onboarding-fe-team2-todos.netlify.app)

## 목차

- [폴더 구조](#폴더 구조)
- [Best Practice](#Best-Practice)
- [Git/GitHub](#Git/GitHub)
- [Eslint/Prettier/Husky](#Eslint/Prettier/Husky)
- [기타 컨벤션](#기타-컨벤션)

## 폴더 구조

**src/api**
| 함수 | 역할 |
|---------------------|--------------------------------|
| `auth` | 로그인, 회원가입 관련 api |
| `core` | axios request, response, error |
| `todos` | 투두 관련 api |

**src/components**
| 함수 | 역할 |
|---------------------|--------------------------------|
| `PageContainer` | 회원가입 컴포넌트의 컨테이너 |
| `SignupForm` | 회원가입 컴포넌트 |

**src/constants**
| 함수 | 역할 |
|---------------------|--------------------------------|
| `localstorage` | 로컬스토리지의 key값 상수화 |
| `route` | 라우터 경로 상수화 |

**src/pages**
| 함수 | 역할 |
|---------------------|--------------------------------|
| Signin/`Signin` | 로그인 페이지 |
| Signup/`Signup` | 회원가입 페이지 |
| Todos/`Todos` | 투두 리스트 페이지 |

**src/utils**
| 함수 | 역할 |
|---------------------|--------------------------------|
| `validator` | form 데이터의 유효성 검사 |

**src/**
| 함수 | 역할 |
|---------------------|--------------------------------|
| `App` | 라우터 구현 |

## Best Practice

### Router(`src/App`)

**구현**

- react-router-dom 라이브러리 설치
- 브라우저의 localStorage에 토큰이 있는지 확인
- 토큰 유무에 따라 redirect 하도록 구현

**이유**

- 초기 진입시에 App 레벨에서 토큰 유무를 판단하고 리다이렉트를 해주면 한 번의 렌더링 만으로 redirect가 가능해집니다.
- 만약 컴포넌트 안에서 토큰 유무를 확인하고 redirect 처리를 해주었다면, 접속 불가능한 화면이 잠깐이라도 렌더링 되는데 이 부분이 리액트 동작 측면에서 다소 비효율적이라고 판단하였습니다.
- 요구사항 특성상 `/` 라우트에 상응하는 페이지 컴포넌트는 필수 요소가 아니라고 판단해 `/` 라우트는 오로지 redirect 용도로만 사용되도록 구현하였습니다.

### API

**구현**

- http request는 axios라이브러리를 사용
- api의 base한 로직은 BaseApiService class로 추상화
- 추상화한 BaseApiService를 기반으로 Auth, TodoApiService class 정의
- 정의한 class를 인스턴스를 바로 생성하여 export

**이유**

- http request관련 추상화 된 함수를 별도의 구현없이 사용하기 위해 axios 라이브러리를 사용하였습니다.
- 각 service들의 공통된 로직들은 extends하여 생산성은 향상 시키고 에러는 줄여주기 위해 BaseApiService로 추상화하였습니다. JS에 abstract class 문법이 존재하지 않지만 실제로는 추상 클래스라고 보면 됩니다.
- 각 service들을 싱글톤 패톤으로 관리하기 위해 정의한 class를 export구문에서 바로 new 키워드를 사용하여 하나의 인스턴스만 export 되게끔 사용하였습니다.

### Todo

**구현**

- api 요청을 활용한 Todo CRUD 컴포넌트 및 UI 분리 구현
- 상태 관리를 통한 렌더링 구현

**이유**

- 논리적인 단위로 컴포넌트를 분리하기 위해 역할에 따라 컴포넌트를 나누었습니다. 새로 추가하는 Create, 기존의 Todo를 가져오는 Read, 기존의 Todo를 수정하는 Update와 Delete를 하나의 컴포넌트로 구분했습니다.
- 전역 상태 관리 라이브러리를 사용하지 않고, `props`와 `state`를 통해 상태 관리를 하여 렌더링을 구현했습니다.

## Git, Github

- [깃 브랜치 전략 링크](https://github.com/wanted-pre-onboarding-fe-6th-team2/todo-list/wiki/git-branch-%EC%A0%84%EB%9E%B5)
- [커밋 컨벤션 링크](https://github.com/wanted-pre-onboarding-fe-6th-team2/todo-list/wiki/%EC%BB%A4%EB%B0%8B-%EC%BB%A8%EB%B2%A4%EC%85%98)

## Eslint/Prettier/Husky

- [코딩 컨벤션 링크](https://github.com/wanted-pre-onboarding-fe-6th-team2/todo-list/wiki/%EC%BD%94%EB%94%A9-%EC%BB%A8%EB%B2%A4%EC%85%98)
- [emotion 사용 컨벤션 링크](https://github.com/wanted-pre-onboarding-fe-6th-team2/todo-list/wiki/emotion-%EC%82%AC%EC%9A%A9-%EC%BB%A8%EB%B2%A4%EC%85%98)

```JSON
// .eslintrc.json
{
  "extends": ["react-app", "plugin:prettier/recommended"],
  "plugins": ["prettier", "prefer-arrow"],
  "rules": {
    "prefer-arrow/prefer-arrow-functions": [
      "error",
      {
        "disallowPrototype": false,
        "singleReturnOnly": true,
        "classPropertiesAllowed": true
      }
    ],
    "func-style": ["error", "expression"],
    "prettier/prettier": "error",
    "prefer-arrow-callback": ["error", { "allowNamedFunctions": true }],
    "no-unused-vars": "error",
    "no-var": "error",
    "no-console": "error",
    "prefer-const": [
      "error",
      {
        "destructuring": "any",
        "ignoreReadBeforeAssign": false
      }
    ],
    "react/jsx-no-useless-fragment": "error"
  }
}
```

```JSON
// .prettierrc
{
  "singleQuote": true,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "tabWidth": 2,
  "semi": true,
  "arrowParens": "avoid",
  "endOfLine": "lf",
  "printWidth": 100
}
```
