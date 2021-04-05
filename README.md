# *Image Resizer*

> GitHub Action to resize images (jpeg, png, webp, avif, tiff, gif, svg) from a file or url

[![GitHub marketplace](https://img.shields.io/badge/marketplacegithub-image--resizer-blue?logo=github)](https://github.com/marketplace/actions/image-resizer)

[![management: perfekt👌](https://img.shields.io/badge/management-perfekt👌-red.svg)](https://github.com/lekterable/perfekt)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
![Mergify Status](https://img.shields.io/endpoint.svg?url=https://gh.mergify.io/badges/AlexRogalskiy/github-action-image-resizer)
[![Reviewed by Hound](https://img.shields.io/badge/Reviewed_by-Hound-8E64B0.svg)](https://houndci.com)
[![Chat](https://img.shields.io/badge/chat-discussions-success.svg)](https://github.com/AlexRogalskiy/github-action-image-resizer/discussions)

[![DeepScan grade](https://deepscan.io/api/teams/11946/projects/16314/branches/347248/badge/grade.svg)](https://deepscan.io/dashboard#view=project\&tid=11946\&pid=16314\&bid=347248)
![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/AlexRogalskiy/github-action-image-resizer)
![GitHub Release Date](https://img.shields.io/github/release-date/AlexRogalskiy/github-action-image-resizer)
![Lines of code](https://tokei.rs/b1/github/AlexRogalskiy/github-action-image-resizer?category=lines)
![GitHub closed issues](https://img.shields.io/github/issues-closed/AlexRogalskiy/github-action-image-resizer)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/AlexRogalskiy/github-action-image-resizer)
![GitHub repo size](https://img.shields.io/github/repo-size/AlexRogalskiy/github-action-image-resizer)
![GitHub last commit](https://img.shields.io/github/last-commit/AlexRogalskiy/github-action-image-resizer)
![GitHub language count](https://img.shields.io/github/languages/count/AlexRogalskiy/github-action-image-resizer)
![GitHub search hit counter](https://img.shields.io/github/search/AlexRogalskiy/github-action-image-resizer/goto)
![GitHub Repository branches](https://badgen.net/github/branches/AlexRogalskiy/github-action-image-resizer)
![GitHub Repository dependents](https://badgen.net/github/dependents-repo/AlexRogalskiy/github-action-image-resizer)
[![Renovatebot](https://badgen.net/badge/renovate/enabled/green?cache=300)](https://renovatebot.com/)
[![Dependabot](https://img.shields.io/badge/dependabot-enabled-1f8ceb.svg?style=flat-square)](https://dependabot.com/)
[![NewReleases](https://newreleases.io/badge.svg)](https://newreleases.io/github/AlexRogalskiy/github-action-image-resizer)
[![Hits-of-Code](https://hitsofcode.com/github/alexrogalskiy/github-action-image-resizer?branch=master)](https://hitsofcode.com/github/alexrogalskiy/github-action-image-resizer?branch=master/view?branch=master)

[![codecov](https://codecov.io/gh/AlexRogalskiy/github-action-image-resizer/branch/master/graph/badge.svg?token=uTDmIg0RMh)](https://codecov.io/gh/AlexRogalskiy/github-action-image-resizer)
[![CI](https://github.com/AlexRogalskiy/github-action-image-resizer/workflows/CI/badge.svg)](https://github.com/AlexRogalskiy/github-action-image-resizer/actions/workflows/build.yml)
[![CircleCI](https://circleci.com/gh/AlexRogalskiy/github-action-image-resizer.svg?style=shield)](https://circleci.com/gh/AlexRogalskiy/github-action-image-resizer)
[![GitHub Super-Linter](https://github.com/AlexRogalskiy/github-action-image-resizer/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/marketplace/actions/super-linter)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![ComVer](https://img.shields.io/badge/ComVer-compliant-brightgreen.svg)][repo]
[![Public workflows that use this action.][total_usages]][search_results]
[![Licence][license_id]][license_content]

[![Chat](https://img.shields.io/badge/chat-discussions-success.svg)](https://github.com/AlexRogalskiy/github-action-image-resizer/discussions)
[![Open questions](https://img.shields.io/badge/Open-questions-blue.svg?style=flat-curved)](https://github.com/AlexRogalskiy/github-action-image-resizer/labels/question)
[![Open bugs](https://img.shields.io/badge/Open-bugs-red.svg?style=flat-curved)](https://github.com/AlexRogalskiy/github-action-image-resizer/labels/bug)

## *Table of contents*

- [*Description*](#description)
- [*Inputs*](#inputs)
  - [`sourceData`](#sourcedata)
  - [`width`](#width)
  - [`height`](#height)
  - [`quality`](#quality)
  - [`formatType`](#formattype)
  - [`sourceFile`](#sourcefile)
  - [`targetPath`](#targetpath)
  - [`targetFile`](#targetfile)
- [*Outputs*](#outputs)
  - [`changed`](#changed)
- [*Examples*](#examples)
- [*Visitor stats*](#visitor-stats)
- [*Licensing*](#licensing)
- [*Authors*](#authors)
- [*Versioning*](#versioning)
- [*Contribution*](#contribution)
- [*Acknowledgement*](#acknowledgement)
- [*Forks*](#forks)
- [*Development Support*](#development-support)

## *Description*

<p align="center" style="text-align:center;">
    <a href="https://www.typescriptlang.org/">
        <img src="https://img.shields.io/badge/typescript%20-%23323330.svg?&logo=typescript&logoColor=%23F7DF1E" alt="Typescript" />
    </a>
    <a href="https://www.repostatus.org/#active">
        <img src="https://img.shields.io/badge/Project%20Status-Active-brightgreen" alt="Project Status: Active – The project has reached a stable, usable state and is being actively developed." />
    </a>
    <a href="https://badges.pufler.dev">
        <img src="https://badges.pufler.dev/created/AlexRogalskiy/github-action-image-resizer" alt="Project created status" />
    </a>
    <a href="https://badges.pufler.dev">
        <img src="https://badges.pufler.dev/updated/AlexRogalskiy/github-action-image-resizer" alt="Project updated status" />
    </a>
</p>

Provides operations on resizing input images from a file or url (jpeg, png, webp, avif, tiff, gif, svg) by format parameters.

## *Inputs*

### `sourceData`

**Optional** JSON data source file with action parameters:

#### Complete parameters

```json
[
    {
        "width": 150,
        "height": 250,
        "quality": 100,
        "formatType": "jpeg",
        "sourceFile": "./data/input.jpg",
        "targetPath": "./data",
        "targetFile": "output.jpg"
    },
    {
        "width": 250,
        "height": 250,
        "formatType": "png",
        "sourceFile": "./data/input2.png",
        "targetPath": "./data",
        "targetFile": "output2.png"
    },
    {
        "width": 350,
        "height": 350,
        "formatType": "jpeg",
        "sourceFile": "https://lunrjs.com/images/moon.jpg",
        "targetPath": "./data"
    }
]
```

#### Basic parameters

```json
[
    {
        "width": 150,
        "height": 250,
        "formatType": "jpeg",
        "sourceFile": "./data/input.jpg",
        "targetPath": "./data"
    },
    {
        "width": 250,
        "height": 250,
        "formatType": "png",
        "sourceFile": "./data/input2.png",
        "targetPath": "./data"
    },
    {
        "width": 350,
        "height": 350,
        "formatType": "jpeg",
        "sourceFile": "https://lunrjs.com/images/moon.jpg",
        "targetPath": "./data"
    }
]
```

### `width`

**Required** Target image width

### `height`

**Required** Target image height

### `quality`

**Optional** Target image quality (should be in range **0-100**)

### `formatType`

**Required** Target image format type (any from the list: **heic**, **heif**, **avif**, **jpeg**, **png**, **raw**, **tiff**, **webp**, **gif**)

### `sourceFile`

**Required** Source input image file or url to fetch content from

### `targetPath`

**Required** Target path to store processed image files

### `targetFile`

**Optional** Target image file name (default **sourceFile**)

## *Outputs*

### `changed`

Image file processing operation status

#### `true`

When input image file successfully processed

#### `false`

When error occurred while processing input image file

## *Examples*

```yml
- name: Resize images
  uses: alexrogalskiy/github-action-image-resizer@master
  with:
    prefix: '<!--views:marker:start-->\n'
    suffix: '\n<!--views:marker:end-->'
    sourceFile: './data/info.md'
    placeholder: '<!--views:marker:start-->[\s\S]*?<!--views:marker:end-->'
    replacement: '<p align="center" style="text-align:center;">Data Block</p>'
```

Running locally:

- `npm run start:action --action github-action-image-resizer --prefix '<!--views:marker:start-->\n' --suffix '\n<!--views:marker:end-->' --sourceFile './data/info.md' --placeHolder '<!--views:marker:start-->[\s\S]*?<!--views:marker:end-->' --replacement '<p align="center" style="text-align:center;">Data Block</p>'`

## *Visitor stats*

[![GitHub page hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FAlexRogalskiy%2Fgithub-action-image-resizer\&count_bg=%2379C83D\&title_bg=%23555555\&icon=\&icon_color=%23E7E7E7\&title=hits\&edge_flat=true)](https://hits.seeyoufarm.com)

![GitHub stars](https://img.shields.io/github/stars/AlexRogalskiy/github-action-image-resizer?style=social)
![GitHub forks](https://img.shields.io/github/forks/AlexRogalskiy/github-action-image-resizer?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/AlexRogalskiy/github-action-image-resizer?style=social)

## *Licensing*

***Image Resizer*** is distributed under LGPL version 3 or later,
\[[License](https://github.com/AlexRogalskiy/github-action-image-resizer/blob/master/LICENSE)]. LGPLv3 is additional
permissions on top of GPLv3.

![license](https://user-images.githubusercontent.com/19885116/48661948-6cf97e80-ea7a-11e8-97e7-b45332a13e49.png)

## *Authors*

***Image Resizer*** is maintained by the following GitHub team-members:

- [![Author](https://img.shields.io/badge/author-AlexRogalskiy-FB8F0A)](https://github.com/AlexRogalskiy)

with community support please contact with us if you have some question or proposition.

## *Versioning*

The project uses [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on
this repository][tags].

## *Contribution*

[![Contributors Display](https://badges.pufler.dev/contributors/AlexRogalskiy/github-action-image-resizer?size=50\&padding=5\&bots=true)](https://badges.pufler.dev)

Please read
[CONTRIBUTING.md](https://github.com/AlexRogalskiy/github-action-image-resizer/blob/master/.github/CONTRIBUTING.md)
for details on our code of conduct, and the process for submitting pull requests to us
([emoji key](https://allcontributors.org/docs/en/emoji-key)).

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind are welcome!

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
![Github contributors](https://img.shields.io/github/all-contributors/AlexRogalskiy/github-action-image-resizer)

See also the list of [contributors][contributors] who participated in this project.

## *Acknowledgement*

[![Stargazers repo roster for @AlexRogalskiy/github-action-image-resizer](https://reporoster.com/stars/AlexRogalskiy/github-action-image-resizer)][stars]

## *Forks*

[![Forkers repo roster for @AlexRogalskiy/github-action-image-resizer](https://reporoster.com/forks/AlexRogalskiy/github-action-image-resizer)][forkers]

## *Development Support*

Like ***Image Resizer*** ? Consider buying me a coffee :)

[![Become a Patron](https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?style=flat-square\&logo=patreon\&color=e64413)](https://www.patreon.com/alexrogalskiy)
[![Buy Me A Coffee](https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=buy%20me%20a%20coffee)](https://www.buymeacoffee.com/AlexRogalskiy)
[![KoFi](https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=ko-fi)](https://ko-fi.com/alexrogalskiy)

***

[![forthebadge](https://img.shields.io/badge/made%20with-%20typescript-C1282D.svg?logo=typescript\&style=for-the-badge)](https://www.typescriptlang.org/)
[![forthebadge](https://img.shields.io/badge/powered%20by-%20github-7116FB.svg?logo=github\&style=for-the-badge)](https://github.com/)
[![forthebadge](https://img.shields.io/badge/build%20with-%20%E2%9D%A4-B6FF9B.svg?logo=heart\&style=for-the-badge)](https://forthebadge.com/)

[repo]: https://github.com/AlexRogalskiy/github-action-image-resizer

[tags]: https://github.com/AlexRogalskiy/github-action-image-resizer/tags

[issues]: https://github.com/AlexRogalskiy/github-action-image-resizer/issues

[pulls]: https://github.com/AlexRogalskiy/github-action-image-resizer/pulls

[wiki]: https://github.com/AlexRogalskiy/github-action-image-resizer/wiki

[stars]: https://github.com/AlexRogalskiy/github-action-image-resizer/stargazers

[forkers]: https://github.com/AlexRogalskiy/github-action-image-resizer/network/members

[contributors]: https://github.com/AlexRogalskiy/github-action-image-resizer/graphs/contributors

[license_id]: https://img.shields.io/github/license/AlexRogalskiy/github-action-image-resizer

[license_content]: https://github.com/AlexRogalskiy/github-action-image-resizer/blob/master/LICENSE

[total_usages]: https://img.shields.io/endpoint?url=https%3A%2F%2Fapi-git-master.endbug.vercel.app%2Fapi%2Fgithub-actions%2Fused-by%3Faction%3DAlexRogalskiy%2Fgithub-action-image-resizer%26badge%3Dtrue

[search_results]: https://github.com/search?o=desc&q=AlexRogalskiy/github-action-image-resizer+path%3A.github%2Fworkflows+language%3AYAML&s=&type=Code
