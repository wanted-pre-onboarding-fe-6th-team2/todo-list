# 원티드 프리온보딩 2팀

> 김주탁, 류하준, 윤영주, 이형민, 조남경, 하성화, 강주희, 변지윤

## 목차

- [폴더구조](#폴더구조)
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

- App 레벨에서 토큰 유무를 판단하고 리다이렉트를 해주면 한 번의 렌더링 만으로 redirect가 가능해집니다.
- 만약 컴포넌트 안에서 토큰 유무를 확인하고 redirect 처리를 해주었다면, 접속 불가능한 화면이 잠깐이라도 렌더링 되는데 이 부분이 리액트 동작 측면에서 다소 비효율적이라고 판단하였습니다.
- 요구사항 특성상 `/` 라우트는 필수 요소가 아니라고 판단해 오로지 redirect 용도로만 기능하도록 구현하였습니다.

### 회원가입/로그인

**구현**

- useState를 이용해서 회원가입 inputs, validations 상태 관리
- 회원가입 input 유효성 검사 로직을 util 함수로 분리
- 회원가입 버튼 disabled & 유효성 검사 문구를 이용하여 Validation UI/UX 구현
- 회원가입 버튼 클릭 시, Api 콜 호출을 통해 회원가입 처리

**이유**

- 회원가입 form의 input 상태 값 변경에 따른 유효성 검사 문구 노출을 위해 useState를 이용하여 관리할 수 있도록 하였습니다.
- 로그인, 회원가입 시 동일하게 진행되는 유효성 검사에 대한 코드 중복을 피하고 관심사를 분리를 위해 util 함수를 생성하여 관리하게 되었습니다.
- 코딩 컨벤션에 따른 변수명을 작성하여 코드 통일성을 높이고 직관적인 네이밍으로 작성하여 가독성을 높일 수 있도록 하였습니다.

### Todo

**구현**

- api 요청을 활용한 Todo CRUD 컴포넌트 및 UI 분리 구현
- 상태 관리를 통한 렌더링 구현

**이유**

- 논리적인 단위로 컴포넌트를 분리하기 위해 역할에 따라 컴포넌트를 나누었습니다. 새로 추가하는 Create, 기존의 Todo를 가져오는 Read, 기존의 Todo를 수정하는 Update와 Delete를 하나의 컴포넌트로 구분했습니다.
- # 전역 상태 관리 라이브러리를 사용하지 않고, `props`와 `state`를 통해 상태 관리를 하여 렌더링을 구현했습니다.

## Git/Github

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
