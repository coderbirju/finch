window.BENCHMARK_DATA = {
  "lastUpdate": 1706546779885,
  "repoUrl": "https://github.com/runfinch/finch",
  "entries": {
    "Finch Benchmark": [
      {
        "commit": {
          "author": {
            "email": "47606630+weikequ@users.noreply.github.com",
            "name": "Weike Qu",
            "username": "weikequ"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f8382ef5fedbf109047b835237ae00d3c1645165",
          "message": "feat: update infrastructure to use macOS 14 (#710)\n\nIssue #, if available:\r\n- Closes https://github.com/runfinch/finch/issues/680\r\n\r\n*Description of changes:*\r\n- https://github.com/runfinch/infrastructure/pull/496\r\n- Removed the docker-compat e2e tests in the corresponding ci-docs left\r\nover from https://github.com/runfinch/finch/pull/524\r\n\r\n*Testing done:*\r\n- none\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Weike Qu <weikequ@amazon.com>",
          "timestamp": "2023-12-07T10:09:21-08:00",
          "tree_id": "f63a9e526fe581cfa4b10d856ce86a4cd9c8dbd7",
          "url": "https://github.com/runfinch/finch/commit/f8382ef5fedbf109047b835237ae00d3c1645165"
        },
        "date": 1701972787355,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 63503717792,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.8626,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 63.64,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 63.5,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1267236864,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2829688,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 59839,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24111476583,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.6812,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 50,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.11,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 34320384,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1076208,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22887,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 248199075,
            "unit": "ns/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.292,
            "unit": "%cpu_avg/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 11.67,
            "unit": "%cpu_peak/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2481,
            "unit": "cpu_seconds/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 6553,
            "unit": "disk_bytes/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21532,
            "unit": "B/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 279,
            "unit": "allocs/op",
            "extra": "5 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41898282+github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bb1a273e0b966599d77dd649002e2896ed8b98e5",
          "message": "build(deps): Bump submodules and dependencies (#724)\n\nAutomated changes by\r\n[create-pull-request](https://github.com/peter-evans/create-pull-request)\r\nGitHub action\r\n\r\nSigned-off-by: GitHub <noreply@github.com>\r\nCo-authored-by: KevinLiAWS <KevinLiAWS@users.noreply.github.com>",
          "timestamp": "2023-12-07T15:20:23-08:00",
          "tree_id": "9163c4536bd055db63f35e66e8d92f57c0ea5d6e",
          "url": "https://github.com/runfinch/finch/commit/bb1a273e0b966599d77dd649002e2896ed8b98e5"
        },
        "date": 1701991393892,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 32702513375,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.9622,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 71.43,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 32.7,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 956637184,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1461208,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 30985,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24152926125,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 1.186,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 57.14,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.15,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 94330880,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1079496,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22942,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 247542383,
            "unit": "ns/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 2.379,
            "unit": "%cpu_avg/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 19.5,
            "unit": "%cpu_peak/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2475,
            "unit": "cpu_seconds/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 3276,
            "unit": "disk_bytes/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21539,
            "unit": "B/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 280,
            "unit": "allocs/op",
            "extra": "5 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cnkevin@amazon.com",
            "name": "Kevin Li",
            "username": "KevinLiAWS"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ea255abb64c653a8c35e82c9c17aec9904278c5",
          "message": "revert: \"fix: resolve shellcheck warnings\" (#725)\n\nReverts runfinch/finch#684\r\nThis commit has a regression for signing. Revert to unblock the release.\r\n\r\nSigned-off-by: Kevin Li <cnkevin@amazon.com>",
          "timestamp": "2023-12-07T17:20:04-08:00",
          "tree_id": "530bcb1b7e610d7eed5e4b5f95f71abc8d7e888d",
          "url": "https://github.com/runfinch/finch/commit/8ea255abb64c653a8c35e82c9c17aec9904278c5"
        },
        "date": 1701998569720,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 33753175291,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.5823,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 50,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 33.75,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1160425472,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1506408,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 32008,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24195523834,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.7283,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 37.5,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.2,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 138543104,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1081000,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22986,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 258675010,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.14,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 18.75,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2586,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 4096,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 22020,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 290,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "963d278df6cfb2c660f25601a916293b29d51bc8",
          "message": "build(deps): Bump github.com/aws/aws-sdk-go-v2 from 1.23.5 to 1.24.0 (#729)\n\nBumps\r\n[github.com/aws/aws-sdk-go-v2](https://github.com/aws/aws-sdk-go-v2)\r\nfrom 1.23.5 to 1.24.0.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/0d643a8f0a8ad09075f41a60acba6a208cb36c58\"><code>0d643a8</code></a>\r\nRelease 2023-12-07</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/e38b534ccea2707475381f985bc9236970bab554\"><code>e38b534</code></a>\r\nRegenerated Clients</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/f394daf705a925e626f6a5c52aa433ff5504c7f1\"><code>f394daf</code></a>\r\nUpdate SDK's smithy-go dependency to v1.19.0</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/4fb654cee93178383ad85934adc3e16cb906baf7\"><code>4fb654c</code></a>\r\nUpdate endpoints model</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/8594ca09ef8095c3287128f364527b1fea3bc49c\"><code>8594ca0</code></a>\r\nUpdate API model</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/e33a34c60f1001aa0a85cb9eb682d1b3153bed43\"><code>e33a34c</code></a>\r\nfix codegen ci (<a\r\nhref=\"https://redirect.github.com/aws/aws-sdk-go-v2/issues/2418\">#2418</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/57a201c7bb214737f78cf871fbeafaa929bf1d8d\"><code>57a201c</code></a>\r\nregenerate partitions (<a\r\nhref=\"https://redirect.github.com/aws/aws-sdk-go-v2/issues/2415\">#2415</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/be06f0299409272364d03e76196939db023ef807\"><code>be06f02</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/aws/aws-sdk-go-v2/issues/2344\">#2344</a>\r\nfrom aws/feat-request-compression-2</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/70bf4107034085068fb6847667657fbb78367be4\"><code>70bf410</code></a>\r\nChange config loading logic</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/8c02c46d4857cbf2c1eb607484e3b94458fe50eb\"><code>8c02c46</code></a>\r\nRelease 2023-12-06</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/compare/v1.23.5...v1.24.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/aws/aws-sdk-go-v2&package-manager=go_modules&previous-version=1.23.5&new-version=1.24.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-12-08T16:12:03-08:00",
          "tree_id": "3a6ef11ec1f4a56f7c58041b811b6b92342d2d19",
          "url": "https://github.com/runfinch/finch/commit/963d278df6cfb2c660f25601a916293b29d51bc8"
        },
        "date": 1702080895947,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 33503488500,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.9217,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 60,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 33.5,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1250029568,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1494472,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 31755,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24063255042,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 1.035,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 50,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.06,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 99651584,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1075168,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22841,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 251407614,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.241,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 18.37,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2514,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 4096,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21598,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 283,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cnkevin@amazon.com",
            "name": "Kevin Li",
            "username": "KevinLiAWS"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e8187432a02c59a821a0d3b39c9cbc51f75a60cd",
          "message": "fix: Change the default behavoir for deleting .finch folder to false when uninstall (#732)\n\nIssue #, if available:\r\n\r\n*Description of changes:*\r\nTo make homebrew keep the .finch folder when uninstall, change the\r\nuninstall script default option to not deleting the .finch folder\r\n\r\n*Testing done:*\r\nTested locally by modifying the script after homebrew installation\r\n\r\n\r\n- [X] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Kevin Li <cnkevin@amazon.com>",
          "timestamp": "2023-12-11T11:43:31-08:00",
          "tree_id": "474d39949c4b090117022086bf254b7d9e208570",
          "url": "https://github.com/runfinch/finch/commit/e8187432a02c59a821a0d3b39c9cbc51f75a60cd"
        },
        "date": 1702323990120,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 34744438583,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.862,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 66.67,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 34.74,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1099976704,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1547912,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 32958,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24634576958,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 1.026,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 55.56,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.63,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 239210496,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1099520,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 23402,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 253302594,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.832,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 20.95,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2533,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 4096,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21604,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 285,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "efecfcae8922f47581a4575125acbe375a706b11",
          "message": "build(deps): Bump golang.org/x/tools from 0.16.0 to 0.16.1 (#734)\n\nBumps [golang.org/x/tools](https://github.com/golang/tools) from 0.16.0\r\nto 0.16.1.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/2acb2e697b49f179be93652febb89d384f0f09c9\"><code>2acb2e6</code></a>\r\ngopls/internal/test/marker: minor clean up of marker test doc</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/28b92af2866ab2bc225795ba13f5a1ae765ffec5\"><code>28b92af</code></a>\r\ninternal/typeparams: eliminate remainining compatibility shims</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/ee35f8ea92b83ca45ebd96714001e9312bfc96a0\"><code>ee35f8e</code></a>\r\ngopls/internal/lsp/source: hovering over broken packages is not an\r\nerror</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/67611a11a1be5466d372eba4e925d97290929ef4\"><code>67611a1</code></a>\r\ninternal/typeparams: eliminate type aliases</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/23c86e8ed69114240a9c50fbacdbbeadb4b63385\"><code>23c86e8</code></a>\r\ninternal/typeparams: delete const Enabled=true and simplify</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/e46688f41326d03a6df28607f1b4d170e31b16ad\"><code>e46688f</code></a>\r\ngopls/internal/analysis/fillstruct: don't panic with invalid fields</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/8bd7553f7c595ecbf244343302e1bfe890f1f947\"><code>8bd7553</code></a>\r\ngopls/internal/util/goversion: warn about EOL for Go 1.18</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/bc9cd159c589d9f78867aaeb5c70867c58e24e61\"><code>bc9cd15</code></a>\r\ngopls/internal/settings: remove MemoryMode option</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/bbc30f1f81aa4a8e2b390bdcc5ebb019e90d658e\"><code>bbc30f1</code></a>\r\ngopls/protocol: Allow AnnotatedTextEdits</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/f40889dc8bf08e65329aa3f302ba7af3024d712d\"><code>f40889d</code></a>\r\ngopls/internal/analysis/stubmethods: fix OOB panic in fromValueSpec</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/golang/tools/compare/v0.16.0...v0.16.1\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=golang.org/x/tools&package-manager=go_modules&previous-version=0.16.0&new-version=0.16.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-12-14T09:33:22-08:00",
          "tree_id": "6ac23b8db3dc26f2cfc59445be768b0cd3484631",
          "url": "https://github.com/runfinch/finch/commit/efecfcae8922f47581a4575125acbe375a706b11"
        },
        "date": 1702575856862,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 32556049833,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4945,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 41.67,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 32.56,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1167482880,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1456752,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 30873,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24542226417,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.6766,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 37.5,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.54,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 78675968,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1096064,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 23306,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 260908475,
            "unit": "ns/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.222,
            "unit": "%cpu_avg/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 10.44,
            "unit": "%cpu_peak/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2609,
            "unit": "cpu_seconds/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 6553,
            "unit": "disk_bytes/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21830,
            "unit": "B/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 291,
            "unit": "allocs/op",
            "extra": "5 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0c4e056a70babe205fe633e35f92b0aa2aed2c3a",
          "message": "ci(deps): Bump actions/upload-artifact from 2 to 4 (#737)\n\nBumps\r\n[actions/upload-artifact](https://github.com/actions/upload-artifact)\r\nfrom 2 to 4.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/actions/upload-artifact/releases\">actions/upload-artifact's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v4.0.0</h2>\r\n<h2>What's Changed</h2>\r\n<p>The release of upload-artifact@v4 and download-artifact@v4 are major\r\nchanges to the backend architecture of Artifacts. They have numerous\r\nperformance and behavioral improvements.</p>\r\n<p>For more information, see the <a\r\nhref=\"https://github.com/actions/toolkit/tree/main/packages/artifact\"><code>@​actions/artifact</code></a>\r\ndocumentation.</p>\r\n<h2>New Contributors</h2>\r\n<ul>\r\n<li><a href=\"https://github.com/vmjoseph\"><code>@​vmjoseph</code></a>\r\nmade their first contribution in <a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/464\">actions/upload-artifact#464</a></li>\r\n</ul>\r\n<p><strong>Full Changelog</strong>: <a\r\nhref=\"https://github.com/actions/upload-artifact/compare/v3...v4.0.0\">https://github.com/actions/upload-artifact/compare/v3...v4.0.0</a></p>\r\n<h2>v3.1.3</h2>\r\n<h2>What's Changed</h2>\r\n<ul>\r\n<li>chore(github): remove trailing whitespaces by <a\r\nhref=\"https://github.com/ljmf00\"><code>@​ljmf00</code></a> in <a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/313\">actions/upload-artifact#313</a></li>\r\n<li>Bump <code>@​actions/artifact</code> version to v1.1.2 by <a\r\nhref=\"https://github.com/bethanyj28\"><code>@​bethanyj28</code></a> in <a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/436\">actions/upload-artifact#436</a></li>\r\n</ul>\r\n<p><strong>Full Changelog</strong>: <a\r\nhref=\"https://github.com/actions/upload-artifact/compare/v3...v3.1.3\">https://github.com/actions/upload-artifact/compare/v3...v3.1.3</a></p>\r\n<h2>v3.1.2</h2>\r\n<ul>\r\n<li>Update all <code>@actions/*</code> NPM packages to their latest\r\nversions- <a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/374\">#374</a></li>\r\n<li>Update all dev dependencies to their most recent versions - <a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/375\">#375</a></li>\r\n</ul>\r\n<h2>v3.1.1</h2>\r\n<ul>\r\n<li>Update actions/core package to latest version to remove\r\n<code>set-output</code> deprecation warning <a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/351\">#351</a></li>\r\n</ul>\r\n<h2>v3.1.0</h2>\r\n<h2>What's Changed</h2>\r\n<ul>\r\n<li>Bump <code>@​actions/artifact</code> to v1.1.0 (<a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/327\">actions/upload-artifact#327</a>)\r\n<ul>\r\n<li>Adds checksum headers on artifact upload (<a\r\nhref=\"https://redirect.github.com/actions/toolkit/pull/1095\">actions/toolkit#1095</a>)\r\n(<a\r\nhref=\"https://redirect.github.com/actions/toolkit/pull/1063\">actions/toolkit#1063</a>)</li>\r\n</ul>\r\n</li>\r\n</ul>\r\n<h2>v3.0.0</h2>\r\n<h2>What's Changed</h2>\r\n<ul>\r\n<li>Update default runtime to node16 (<a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/293\">#293</a>)</li>\r\n<li>Update package-lock.json file version to 2 (<a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/302\">#302</a>)</li>\r\n</ul>\r\n<h3>Breaking Changes</h3>\r\n<p>With the update to Node 16, all scripts will now be run with Node 16\r\nrather than Node 12.</p>\r\n<h2>v2.3.1</h2>\r\n<p>Fix for empty fails on Windows failing on upload <a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/281\">#281</a></p>\r\n<h2>v2.3.0 Upload Artifact</h2>\r\n<ul>\r\n<li>Optimizations for faster uploads of larger files that are already\r\ncompressed</li>\r\n<li>Significantly improved logging when there are chunked uploads</li>\r\n<li>Clarifications in logs around the upload size and prohibited\r\ncharacters that aren't allowed in the artifact name or any uploaded\r\nfiles</li>\r\n<li>Various other small bugfixes &amp; optimizations</li>\r\n</ul>\r\n<h2>v2.2.4</h2>\r\n<!-- raw HTML omitted -->\r\n</blockquote>\r\n<p>... (truncated)</p>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/c7d193f32edcb7bfad88892161225aeda64e9392\"><code>c7d193f</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/466\">#466</a>\r\nfrom actions/v4-beta</li>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/13131bb095770b4070a7477c3cd2d96e1c16d9f4\"><code>13131bb</code></a>\r\nlicensed cache</li>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/4a6c273b9834f66a1d05c170dc3f80f9cdb9def1\"><code>4a6c273</code></a>\r\nMerge branch 'main' into v4-beta</li>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/f391bb91a3d3118aeca171c365bb319ece276b37\"><code>f391bb9</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/465\">#465</a>\r\nfrom actions/robherley/v4-documentation</li>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/9653d03c4b74c32144e02dae644fea70e079d4b3\"><code>9653d03</code></a>\r\nApply suggestions from code review</li>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/875b63076402f25ef9d52c294c86ba4f97810575\"><code>875b630</code></a>\r\nadd limitations section</li>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/ecb21463e93740a6be75c3116242169bfdbcb15a\"><code>ecb2146</code></a>\r\nadd compression example</li>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/5e7604f84a055838f64ed68bb9904751523081ae\"><code>5e7604f</code></a>\r\ntrim some repeated info</li>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/d6437d07581fe318a364512e6cf6b1dca6b4f92c\"><code>d6437d0</code></a>\r\nnaming</li>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/1b561557037b4957d7d184e9aac02bec86c771eb\"><code>1b56155</code></a>\r\ns/v4-beta/v4/g</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/actions/upload-artifact/compare/v2...v4\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/upload-artifact&package-manager=github_actions&previous-version=2&new-version=4)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-12-14T12:53:05-05:00",
          "tree_id": "5212cdf60f73beecd33016b17ab0b9a886b15732",
          "url": "https://github.com/runfinch/finch/commit/0c4e056a70babe205fe633e35f92b0aa2aed2c3a"
        },
        "date": 1702576558527,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 35624570542,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4076,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 44.44,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 35.62,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1167388672,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1582928,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 33753,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24603302583,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.661,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 44.44,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.6,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 259604480,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1096496,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 23348,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 251944208,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.645,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 14.58,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2519,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21722,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 283,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c98daa0c781e14dd582ef1e34b9b5dce59a44b7c",
          "message": "ci(deps): Bump actions/download-artifact from 2 to 4 (#736)\n\nBumps\r\n[actions/download-artifact](https://github.com/actions/download-artifact)\r\nfrom 2 to 4.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/actions/download-artifact/releases\">actions/download-artifact's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v4.0.0</h2>\r\n<h2>What's Changed</h2>\r\n<p>The release of upload-artifact@v4 and download-artifact@v4 are major\r\nchanges to the backend architecture of Artifacts. They have numerous\r\nperformance and behavioral improvements.</p>\r\n<p>For more information, see the <a\r\nhref=\"https://github.com/actions/toolkit/tree/main/packages/artifact\"><code>@​actions/artifact</code></a>\r\ndocumentation.</p>\r\n<h2>New Contributors</h2>\r\n<ul>\r\n<li><a href=\"https://github.com/bflad\"><code>@​bflad</code></a> made\r\ntheir first contribution in <a\r\nhref=\"https://redirect.github.com/actions/download-artifact/pull/194\">actions/download-artifact#194</a></li>\r\n</ul>\r\n<p><strong>Full Changelog</strong>: <a\r\nhref=\"https://github.com/actions/download-artifact/compare/v3...v4.0.0\">https://github.com/actions/download-artifact/compare/v3...v4.0.0</a></p>\r\n<h2>v3.0.2</h2>\r\n<ul>\r\n<li>Bump <code>@actions/artifact</code> to v1.1.1 - <a\r\nhref=\"https://redirect.github.com/actions/download-artifact/pull/195\">actions/download-artifact#195</a></li>\r\n<li>Fixed a bug in Node16 where if an HTTP download finished too quickly\r\n(&lt;1ms, e.g. when it's mocked) we attempt to delete a temp file that\r\nhas not been created yet <a\r\nhref=\"hhttps://redirect.github.com/actions/toolkit/pull/1278\">actions/toolkit#1278</a></li>\r\n</ul>\r\n<h2>v3.0.1</h2>\r\n<ul>\r\n<li><a\r\nhref=\"https://redirect.github.com/actions/download-artifact/pull/178\">Bump\r\n<code>@​actions/core</code> to 1.10.0</a></li>\r\n</ul>\r\n<h2>v3.0.0</h2>\r\n<h2>What's Changed</h2>\r\n<ul>\r\n<li>Update default runtime to node16 (<a\r\nhref=\"https://redirect.github.com/actions/download-artifact/pull/134\">actions/download-artifact#134</a>)</li>\r\n<li>Update package-lock.json file version to 2 (<a\r\nhref=\"https://redirect.github.com/actions/download-artifact/pull/136\">actions/download-artifact#136</a>)</li>\r\n</ul>\r\n<h3>Breaking Changes</h3>\r\n<p>With the update to Node 16, all scripts will now be run with Node 16\r\nrather than Node 12.</p>\r\n<h2>v2.1.1</h2>\r\n<ul>\r\n<li>Bump <code>@actions/core</code> to the latest version to prevent\r\nbreaking changes once <code>set-output</code> and\r\n<code>save-state</code> commands are deprecated <a\r\nhref=\"https://redirect.github.com/actions/download-artifact/pull/210\">#21</a></li>\r\n</ul>\r\n<h2>v2.1.0 Download Artifact</h2>\r\n<ul>\r\n<li>Improved output &amp; logging</li>\r\n<li>Fixed issue where downloading all artifacts could cause display\r\npercentages to be over 100%</li>\r\n<li>Various small bug fixes &amp; improvements</li>\r\n</ul>\r\n<h2>v2.0.10</h2>\r\n<ul>\r\n<li>Retry on HTTP 500 responses from the service</li>\r\n</ul>\r\n<h2>v2.0.9</h2>\r\n<ul>\r\n<li>Fixes to proxy related issues</li>\r\n</ul>\r\n<h2>v2.0.8</h2>\r\n<ul>\r\n<li>Improvements to retryability if an error is encountered during\r\nartifact download</li>\r\n</ul>\r\n<h2>v2.0.7 download-artifact</h2>\r\n<ul>\r\n<li>Improved download retry-ability if a partial download is\r\nencountered</li>\r\n</ul>\r\n<h2>v2.0.6</h2>\r\n<p>Update actions/core NPM package that is used internally</p>\r\n<!-- raw HTML omitted -->\r\n</blockquote>\r\n<p>... (truncated)</p>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/7a1cd3216ca9260cd8022db641d960b1db4d1be4\"><code>7a1cd32</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/actions/download-artifact/issues/246\">#246</a>\r\nfrom actions/v4-beta</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/8f32874a49903ea488c5e7d476a9173e8706f409\"><code>8f32874</code></a>\r\nlicensed cache</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/b5ff8444b1c4fcec8131f3cb1ddade813ddfacb1\"><code>b5ff844</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/actions/download-artifact/issues/245\">#245</a>\r\nfrom actions/robherley/v4-documentation</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/f07a0f73f51b3f1d41667c782c821b9667da9d19\"><code>f07a0f7</code></a>\r\nUpdate README.md</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/7226129829bb686fdff47bd63bbd0d1373993a84\"><code>7226129</code></a>\r\nupdate test workflow to use different artifact names for matrix</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/ada9446619b84dd8a557aaaec3b79b58c4986cdf\"><code>ada9446</code></a>\r\nupdate docs and bump <code>@​actions/artifact</code></li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/7eafc8b729ba790ce8f2cee54be8ad6257af4c7c\"><code>7eafc8b</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/actions/download-artifact/issues/244\">#244</a>\r\nfrom actions/robherley/bump-toolkit</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/3132d12662b5915f20cdbf449465896962101abf\"><code>3132d12</code></a>\r\nconsume latest toolkit</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/5be1d3867182a382bc59f2775e002595f487aa88\"><code>5be1d38</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/actions/download-artifact/issues/243\">#243</a>\r\nfrom actions/robherley/v4-beta-updates</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/465b526e63559575a64716cdbb755bc78dfb263b\"><code>465b526</code></a>\r\nconsume latest <code>@​actions/toolkit</code></li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/actions/download-artifact/compare/v2...v4\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/download-artifact&package-manager=github_actions&previous-version=2&new-version=4)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-12-14T12:52:50-05:00",
          "tree_id": "ba67d6c1b3df67071d8689f7370e0f414bbab523",
          "url": "https://github.com/runfinch/finch/commit/c98daa0c781e14dd582ef1e34b9b5dce59a44b7c"
        },
        "date": 1702576586977,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 35002197041,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.5697,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 50,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 35,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1284370432,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1557696,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 33152,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 252167312,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.7705,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 16.66,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2521,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 4096,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21898,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 284,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pendo324@users.noreply.github.com",
            "name": "Justin",
            "username": "pendo324"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "70125362b9e5ab058b7f3005a07b617d8f5c67a1",
          "message": "ci: update release-please action config to work with v4 (#738)\n\nIssue #, if available: N/A\r\n\r\n*Description of changes:* Our release-please GH action version was\r\nrecently bumped from v3 to v4 by a dependabot PR merge. Since then,\r\nwe've merged subsequent PRs but haven't had a new automated release PR\r\nbe created by the bot. This seems to be caused by the [breaking changes\r\ndescribed\r\nhere](https://github.com/google-github-actions/release-please-action?tab=readme-ov-file#upgrading-from-v3-to-v4).\r\n\r\nThis PR tries to migrate our config to work with version 4 of\r\nrelease-please.\r\n\r\n*Testing done:*\r\n- It's kinda hard to test this since the action runs remotely and uses\r\nthe GitHub repo itself as input. If anyone has an idea of how to test\r\nthis that can be done _before_ merging this PR, lmk and I can try it.\r\nOtherwise, seems pretty low-risk to merge and see what happens.\r\n\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Justin Alvarez <alvajus@amazon.com>",
          "timestamp": "2023-12-14T15:31:28-05:00",
          "tree_id": "30c23e2d0a73f6baac0c3e8291bc68c907d7645f",
          "url": "https://github.com/runfinch/finch/commit/70125362b9e5ab058b7f3005a07b617d8f5c67a1"
        },
        "date": 1702586055975,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 33791764125,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.9031,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 57.14,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 33.79,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1164005376,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1508680,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 32060,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24003988917,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 1.229,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 66.67,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 157319168,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1071848,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22795,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 241077567,
            "unit": "ns/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.317,
            "unit": "%cpu_avg/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 15.24,
            "unit": "%cpu_peak/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.241,
            "unit": "cpu_seconds/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21035,
            "unit": "B/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 273,
            "unit": "allocs/op",
            "extra": "5 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d1e25068a503a8b4ea7dd3f349ff4020168a6fb",
          "message": "build(deps): Bump github.com/containerd/containerd from 1.7.10 to 1.7.11 (#742)\n\nBumps\r\n[github.com/containerd/containerd](https://github.com/containerd/containerd)\r\nfrom 1.7.10 to 1.7.11.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/containerd/containerd/releases\">github.com/containerd/containerd's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>containerd 1.7.11</h2>\r\n<p>Welcome to the v1.7.11 release of containerd!</p>\r\n<p>The eleventh patch release for containerd 1.7 contains various fixes\r\nand updates including\r\none security issue.</p>\r\n<h3>Notable Updates</h3>\r\n<ul>\r\n<li><strong>Fix Windows default path overwrite issue</strong> (<a\r\nhref=\"https://redirect.github.com/containerd/containerd/pull/9440\">#9440</a>)</li>\r\n<li><strong>Update push to always inherit distribution sources from\r\nparent</strong> (<a\r\nhref=\"https://redirect.github.com/containerd/containerd/pull/9452\">#9452</a>)</li>\r\n<li><strong>Update shim to use net dial for gRPC shim sockets</strong>\r\n(<a\r\nhref=\"https://redirect.github.com/containerd/containerd/pull/9458\">#9458</a>)</li>\r\n<li><strong>Fix otel version incompatibility</strong> (<a\r\nhref=\"https://redirect.github.com/containerd/containerd/pull/9483\">#9483</a>)</li>\r\n<li><strong>Fix Windows snapshotter blocking snapshot GC on remove\r\nfailure</strong> (<a\r\nhref=\"https://redirect.github.com/containerd/containerd/pull/9482\">#9482</a>)</li>\r\n<li><strong>Mask <code>/sys/devices/virtual/powercap</code> path in\r\nruntime spec and deny in default apparmor profile</strong> (<a\r\nhref=\"https://github.com/containerd/containerd/security/advisories/GHSA-7ww5-4wqc-m92c\">GHSA-7ww5-4wqc-m92c</a>)</li>\r\n</ul>\r\n<h3>Deprecation Warnings</h3>\r\n<ul>\r\n<li><strong>Emit deprecation warning for AUFS snapshotter</strong> (<a\r\nhref=\"https://redirect.github.com/containerd/containerd/pull/9436\">#9436</a>)</li>\r\n<li><strong>Emit deprecation warning for v1 runtime</strong> (<a\r\nhref=\"https://redirect.github.com/containerd/containerd/pull/9450\">#9450</a>)</li>\r\n<li><strong>Emit deprecation warning for deprecated CRI configs</strong>\r\n(<a\r\nhref=\"https://redirect.github.com/containerd/containerd/pull/9469\">#9469</a>)</li>\r\n<li><strong>Emit deprecation warning for CRI v1alpha1 usage</strong> (<a\r\nhref=\"https://redirect.github.com/containerd/containerd/pull/9479\">#9479</a>)</li>\r\n<li><strong>Emit deprecation warning for CRIU config in CRI</strong> (<a\r\nhref=\"https://redirect.github.com/containerd/containerd/pull/9481\">#9481</a>)</li>\r\n</ul>\r\n<p>See the changelog for complete list of changes</p>\r\n<p>Please try out the release binaries and report any issues at\r\n<a\r\nhref=\"https://github.com/containerd/containerd/issues\">https://github.com/containerd/containerd/issues</a>.</p>\r\n<h3>Contributors</h3>\r\n<ul>\r\n<li>Samuel Karp</li>\r\n<li>Derek McGowan</li>\r\n<li>Phil Estes</li>\r\n<li>Bjorn Neergaard</li>\r\n<li>Danny Canter</li>\r\n<li>Sebastiaan van Stijn</li>\r\n<li>ruiwen-zhao</li>\r\n<li>Akihiro Suda</li>\r\n<li>Amit Barve</li>\r\n<li>Charity Kathure</li>\r\n<li>Maksym Pavlenko</li>\r\n<li>Milas Bowman</li>\r\n<li>Paweł Gronowski</li>\r\n<li>Wei Fu</li>\r\n</ul>\r\n<h3>Changes</h3>\r\n<!-- raw HTML omitted -->\r\n<ul>\r\n<li>[release/1.7] Prepare release notes for v1.7.11 (<a\r\nhref=\"https://redirect.github.com/containerd/containerd/pull/9491\">#9491</a>)</li>\r\n</ul>\r\n<!-- raw HTML omitted -->\r\n</blockquote>\r\n<p>... (truncated)</p>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/containerd/containerd/commit/64b8a811b07ba6288238eefc14d898ee0b5b99ba\"><code>64b8a81</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/containerd/containerd/issues/9491\">#9491</a>\r\nfrom dmcgowan/prepare-1.7.11</li>\r\n<li><a\r\nhref=\"https://github.com/containerd/containerd/commit/ea5a4778aa63b3bee0225ec368d4cd2af7dcd238\"><code>ea5a477</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/containerd/containerd/issues/9352\">#9352</a>\r\nfrom thaJeztah/1.7_update_golang_1.20.11</li>\r\n<li><a\r\nhref=\"https://github.com/containerd/containerd/commit/67d356cb3095f3e8f8ad7d36f9a733fea1e7e28c\"><code>67d356c</code></a>\r\nMerge pull request from GHSA-7ww5-4wqc-m92c</li>\r\n<li><a\r\nhref=\"https://github.com/containerd/containerd/commit/dfae68bc3e614a091d0a468c9026da370e3de0d9\"><code>dfae68b</code></a>\r\nPrepare release notes for v1.7.11</li>\r\n<li><a\r\nhref=\"https://github.com/containerd/containerd/commit/de6d8a8fc60851adbfc1d7c9567799357f288e5c\"><code>de6d8a8</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/containerd/containerd/issues/9482\">#9482</a>\r\nfrom ambarve/sn_cleanup_1.7</li>\r\n<li><a\r\nhref=\"https://github.com/containerd/containerd/commit/ed7c6895bd3b33ccc7cfbc8cbd43f6a31333328a\"><code>ed7c689</code></a>\r\nDon't block snapshot garbage collection on Remove failures</li>\r\n<li><a\r\nhref=\"https://github.com/containerd/containerd/commit/467de562c108d074d81dd81d42150f98a6608eae\"><code>467de56</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/containerd/containerd/issues/9481\">#9481</a>\r\nfrom ruiwen-zhao/cri-u</li>\r\n<li><a\r\nhref=\"https://github.com/containerd/containerd/commit/d94f8ffeb057a89dd363fa220b24454cf88f0780\"><code>d94f8ff</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/containerd/containerd/issues/9483\">#9483</a>\r\nfrom dmcgowan/backport-1.7-fix-otel-http</li>\r\n<li><a\r\nhref=\"https://github.com/containerd/containerd/commit/1fdefdd2242fcf704a11f1d6b5149e056ce98ed3\"><code>1fdefdd</code></a>\r\nAdd warning for CRIU config usage</li>\r\n<li><a\r\nhref=\"https://github.com/containerd/containerd/commit/8e0689938a47e582ebefc5709b405fce3badd835\"><code>8e06899</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/containerd/containerd/issues/9479\">#9479</a>\r\nfrom ruiwen-zhao/cri-api-warning</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/containerd/containerd/compare/v1.7.10...v1.7.11\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/containerd/containerd&package-manager=go_modules&previous-version=1.7.10&new-version=1.7.11)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\nYou can disable automated security fix PRs for this repo from the\r\n[Security Alerts\r\npage](https://github.com/runfinch/finch/network/alerts).\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-12-21T11:28:41-08:00",
          "tree_id": "83f50efa0cc0cb8fcae9aba67a962755ba84e6bf",
          "url": "https://github.com/runfinch/finch/commit/7d1e25068a503a8b4ea7dd3f349ff4020168a6fb"
        },
        "date": 1703187092949,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 34615417459,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4964,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 33.33,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 34.62,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1223364608,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1541024,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 32795,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24162501541,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.7369,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 50,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.16,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 33681408,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1079808,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22953,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 245990417,
            "unit": "ns/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.7852,
            "unit": "%cpu_avg/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 10,
            "unit": "%cpu_peak/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2459,
            "unit": "cpu_seconds/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 3276,
            "unit": "disk_bytes/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21294,
            "unit": "B/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 277,
            "unit": "allocs/op",
            "extra": "5 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pendo324@users.noreply.github.com",
            "name": "Justin",
            "username": "pendo324"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f140aa39574ac20c4a1bff6812fa5c8b9fab4985",
          "message": "ci: move from manifest to config file (#746)\n\nIssue #, if available: release-please action not triggering as expected,\r\nsee\r\n[errors](https://github.com/runfinch/finch/actions/runs/7292396775/job/20104474662)\r\nand previous PR (https://github.com/runfinch/finch/pull/738)\r\n\r\n*Description of changes:*\r\n- I re-read the release-please-action\r\n[documentation](https://github.com/google-github-actions/release-please-action?tab=readme-ov-file#advanced-release-configuration),\r\nand I think I put the config in the wrong file in my previous PR.\r\n- Followed the instructions\r\n[here](https://github.com/googleapis/release-please/blob/main/docs/manifest-releaser.md)\r\nto create a manifest release since that seems to be what release-please\r\nrequires when using a config file on v4\r\n- Moved release-type to the config file instead of the yaml directly\r\nbecause the action [seems to\r\nbranch](https://github.com/google-github-actions/release-please-action/blob/cc61a07e2da466bebbc19b3a7dd01d6aecb20d1e/src/index.ts#L83)\r\nits behavior depending on if that's present or not\r\n \r\n*Testing done:*\r\n- Tested on my fork, but its hard to replicate the upstream perfectly\r\n\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\n---------\r\n\r\nSigned-off-by: Justin Alvarez <alvajus@amazon.com>",
          "timestamp": "2024-01-03T13:32:42-05:00",
          "tree_id": "7d104d833ea5aea94c3ee1890f2c80c4387fb308",
          "url": "https://github.com/runfinch/finch/commit/f140aa39574ac20c4a1bff6812fa5c8b9fab4985"
        },
        "date": 1704306934703,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 35789458917,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.5207,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 53.85,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 35.79,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1414963200,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1588640,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 33876,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24502213167,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.7469,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 44.44,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.5,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 33460224,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1092976,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 23253,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 260087334,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.989,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 15.15,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.26,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21774,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 287,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vsiravara@gmail.com",
            "name": "Vishwas Siravara",
            "username": "vsiravar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "31cdc411d29758bae54a0b3fdb37be2777bd9fdc",
          "message": "exp: make finch work on windows with wsl2 (#649)\n\nIssue #, if available:\r\n\r\n*Description of changes:*\r\n- translation logic to wsl paths\r\n- persistent disk for windows\r\n- CI/CD (workflows to run CI on every PR on windows runners, MSI\r\nbuilder, Windows release automation)\r\n\r\nThis PR combines 4 distinct PRs to a separate windev branch. \r\n- additional disk for windows https://github.com/runfinch/finch/pull/594\r\n- translation logic for wsl paths\r\nhttps://github.com/runfinch/finch/pull/581\r\n- CI https://github.com/runfinch/finch/pull/581\r\n- Installer https://github.com/runfinch/finch/pull/624\r\n\r\nThis PR also contains bug fixes and modifications to e2e tests.  \r\n*Testing done:*\r\nYes\r\n\r\n\r\n- [X] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\n---------\r\n\r\nSigned-off-by: Vishwas Siravara <siravara@amazon.com>\r\nSigned-off-by: Vishwas Siravara <vsiravar@gmail.com>\r\nSigned-off-by: Gavin Inglis <giinglis@amazon.com>\r\nSigned-off-by: Justin Alvarez <alvajus@amazon.com>\r\nSigned-off-by: chaoningusc <chaoningusc@gmail.com>\r\nSigned-off-by: cnkevin@amazon.com <chaoningusc@gmail.com>\r\nSigned-off-by: Kevin Li <cnkevin@amazon.com>\r\nCo-authored-by: Vishwas Siravara <vsiravar@gmail.com>\r\nCo-authored-by: Gavin Inglis <43075615+ginglis13@users.noreply.github.com>\r\nCo-authored-by: Justin <pendo324@users.noreply.github.com>\r\nCo-authored-by: Kevin Li <cnkevin@amazon.com>\r\nCo-authored-by: chaoningusc <chaoningusc@gmail.com>\r\nCo-authored-by: Justin Alvarez <alvajus@amazon.com>",
          "timestamp": "2024-01-10T11:19:44-05:00",
          "tree_id": "6bf7f9671f5669beb5edc14faf442320416479d2",
          "url": "https://github.com/runfinch/finch/commit/31cdc411d29758bae54a0b3fdb37be2777bd9fdc"
        },
        "date": 1704903774179,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 32593988709,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.5539,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 37.5,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 32.59,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1180200960,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1457760,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 30910,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 25132799375,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.5839,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 45.45,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 25.13,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 90345472,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1117640,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 23822,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 243725116,
            "unit": "ns/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.658,
            "unit": "%cpu_avg/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 14.67,
            "unit": "%cpu_peak/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2437,
            "unit": "cpu_seconds/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21225,
            "unit": "B/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 275,
            "unit": "allocs/op",
            "extra": "5 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c3ae96794165b4ea696bb94856d40ff91767ed1b",
          "message": "build(deps): Bump github.com/aws/aws-sdk-go-v2 from 1.24.0 to 1.24.1 (#749)\n\nBumps\r\n[github.com/aws/aws-sdk-go-v2](https://github.com/aws/aws-sdk-go-v2)\r\nfrom 1.24.0 to 1.24.1.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/47dd1b1bcbde244357a82ef00fa6a61a9bfb9b39\"><code>47dd1b1</code></a>\r\nRelease 2024-01-04</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/23145e3e605a93582020facfe13350b4153714e1\"><code>23145e3</code></a>\r\nRegenerated Clients</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/00e57bb7feb2d104387103aa4fbcd55dfff3a6a7\"><code>00e57bb</code></a>\r\nUpdate API model</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/73e1a99f2fa858ca56627779852768a9198ba057\"><code>73e1a99</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/aws/aws-sdk-go-v2/issues/2441\">#2441</a>\r\nfrom RanVaknin/fix-documentation-config</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/0f8ad11593c219c52ad7fb12998c75ade39dc7ad\"><code>0f8ad11</code></a>\r\nFix SRA auth trailing checksum retry bug (<a\r\nhref=\"https://redirect.github.com/aws/aws-sdk-go-v2/issues/2438\">#2438</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/efbc5aa622a882167129e69a88aa50c730cd1904\"><code>efbc5aa</code></a>\r\nRelease 2024-01-03</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/78357bb87682230e24b15c01e807d7375a9474e4\"><code>78357bb</code></a>\r\nRegenerated Clients</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/e465ddd60d18e91b34de5917534cfa1542323027\"><code>e465ddd</code></a>\r\nUpdate endpoints model</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/384ad3b7ec21eecb3c6c38b69f86fb6342906b11\"><code>384ad3b</code></a>\r\nUpdate API model</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/1126a91e53a20b18bc1db74225a8417bfb63f427\"><code>1126a91</code></a>\r\nchangelog added</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/compare/v1.24.0...v1.24.1\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/aws/aws-sdk-go-v2&package-manager=go_modules&previous-version=1.24.0&new-version=1.24.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-10T13:44:36-08:00",
          "tree_id": "f6e13dcdc163db1055b42f1e2a4ae00f1bae9d35",
          "url": "https://github.com/runfinch/finch/commit/c3ae96794165b4ea696bb94856d40ff91767ed1b"
        },
        "date": 1704923249888,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 34774595708,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.9774,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 66.67,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 34.77,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1233928192,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1546656,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 32932,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24132541584,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 1.144,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 50,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.13,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 94429184,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1077696,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22928,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 239744667,
            "unit": "ns/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.7913,
            "unit": "%cpu_avg/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 17.25,
            "unit": "%cpu_peak/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2397,
            "unit": "cpu_seconds/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21193,
            "unit": "B/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 272,
            "unit": "allocs/op",
            "extra": "5 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fc434ac4f288bb1d2eeef3c2e2bcb186e8aa5278",
          "message": "build(deps): Bump golang.org/x/crypto from 0.16.0 to 0.18.0 (#751)",
          "timestamp": "2024-01-12T00:18:52+05:30",
          "tree_id": "29743e38ad1008f1e4155c845df31db67d9e8a2a",
          "url": "https://github.com/runfinch/finch/commit/fc434ac4f288bb1d2eeef3c2e2bcb186e8aa5278"
        },
        "date": 1704999108784,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 32551502417,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.5423,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 33.33,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 32.55,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1110888448,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1455568,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 30854,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24095099042,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.6469,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 44.44,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.09,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 190865408,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1075960,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22860,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 251470312,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.977,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 16.96,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2514,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21510,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 283,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pendo324@users.noreply.github.com",
            "name": "Justin",
            "username": "pendo324"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ab5bccb1b1803c4cba835a9e7b68632e296060e5",
          "message": "ci: disable secrets for dependabot PRs (#756)\n\nIssue #, if available:\r\nhttps://github.com/dependabot/dependabot-core/issues/3253#issuecomment-852541544\r\n\r\n*Description of changes:*\r\nWe've seen several tests fail lately, mainly on Windows, for the reason\r\nthat the `aws-actions/configure-aws-credentials` action is failing [like\r\nso](https://github.com/runfinch/finch/actions/runs/7477790251/job/20351287299):\r\n```\r\nRun aws-actions/configure-aws-credentials@010d0da01d0b5a38af31e9c3470dbfdabdecca3a\r\n  with:\r\n    role-session-name: credhelper-test\r\n    audience: sts.amazonaws.com\r\n  env:\r\n    has_creds: true\r\nError: Input required and not supplied: aws-region\r\n```\r\n\r\nThe role-to-assume and aws-region aren't even passed into the action as\r\ninputs. Since this seems to only happen on Windows and on dependabot\r\nPRs, it leads me to believe that this is the root cause:\r\nhttps://github.com/dependabot/dependabot-core/issues/3253#issuecomment-852541544.\r\nThe issue describes how/why dependabot PRs are have secrets disabled in\r\ndepth, which lines up with the errors we're seeing.\r\n\r\nThe reason this only occurred for Windows e2e test runs is because the\r\ncondition that was set for macOS always evaluated to false, due to a\r\nsyntax error (which should also be fixed by this PR).\r\n\r\n*Testing done:*\r\n- It's pretty hard to test this since I'm not dependabot, but we'll know\r\nas soon as this PR is merged and the dependabot PRs are rebased.\r\n\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Justin Alvarez <alvajus@amazon.com>",
          "timestamp": "2024-01-11T15:59:14-05:00",
          "tree_id": "9ad285383548380d69ff49851e177df8ddd83e71",
          "url": "https://github.com/runfinch/finch/commit/ab5bccb1b1803c4cba835a9e7b68632e296060e5"
        },
        "date": 1705006943115,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 38231193750,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.9183,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 66.67,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 38.23,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1162293248,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1732512,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 36229,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24048292375,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 1.048,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 50,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.05,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 33792000,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1073120,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22811,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 257836292,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 2.887,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 24.75,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2578,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 22010,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 289,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ae6db09af37a6a2e2752a772da126c409a0866e1",
          "message": "ci(deps): Bump actions/download-artifact from 4.1.0 to 4.1.1 (#754)\n\nBumps\r\n[actions/download-artifact](https://github.com/actions/download-artifact)\r\nfrom 4.1.0 to 4.1.1.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/actions/download-artifact/releases\">actions/download-artifact's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v4.1.1</h2>\r\n<ul>\r\n<li>Fix transient request timeouts <a\r\nhref=\"https://redirect.github.com/actions/download-artifact/issues/249\">actions/download-artifact#249</a></li>\r\n<li>Bump <code>@actions/artifacts</code> to latest version</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/6b208ae046db98c579e8a3aa621ab581ff575935\"><code>6b208ae</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/actions/download-artifact/issues/274\">#274</a>\r\nfrom actions/vmjoseph/timeout-patch</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/6c5b5806e1d833ffbeb6c412b38ba07d67086dc6\"><code>6c5b580</code></a>\r\nonly adding updated license</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/5f5015dc38f8eb6cafa9c4d68689495abffbea38\"><code>5f5015d</code></a>\r\nreadding index</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/1fddaaf0f1912c34f984d46c39e99a66afa07172\"><code>1fddaaf</code></a>\r\nRevert &quot;updating licenses&quot;</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/8aa9e2115bb091db1962857dc393a054568a7851\"><code>8aa9e21</code></a>\r\nRevert &quot;updating dist&quot;</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/657edd9b813fc9cdb0cddf8601de283f4ecea661\"><code>657edd9</code></a>\r\nupdating licenses</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/555a2fc1299fb63c5a4e673a65c8b9e6e3474b22\"><code>555a2fc</code></a>\r\nupdating dist</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/4fc4d70d4c55025435f9bfd763515cecf048fc86\"><code>4fc4d70</code></a>\r\nupdating lock</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/072ac9dcebef67fdbbc9612b2879103e0e877f16\"><code>072ac9d</code></a>\r\nupdating version no</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/038dc0329f0e804ae981db8af9f43b00a55b10de\"><code>038dc03</code></a>\r\nupdating version no</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/actions/download-artifact/compare/f44cd7b40bfd40b6aa1cc1b9b5b7bf03d3c67110...6b208ae046db98c579e8a3aa621ab581ff575935\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/download-artifact&package-manager=github_actions&previous-version=4.1.0&new-version=4.1.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-11T16:02:00-05:00",
          "tree_id": "49f7b4dca582fd1a0d81a5c25ad9cf57708496c0",
          "url": "https://github.com/runfinch/finch/commit/ae6db09af37a6a2e2752a772da126c409a0866e1"
        },
        "date": 1705010073876,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 35774126250,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.9359,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 70,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 35.77,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1219858432,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1590528,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 33908,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24132908542,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 1.122,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 58.33,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.13,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 33488896,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1075960,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22895,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 239230475,
            "unit": "ns/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.396,
            "unit": "%cpu_avg/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 15.5,
            "unit": "%cpu_peak/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2392,
            "unit": "cpu_seconds/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21136,
            "unit": "B/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 271,
            "unit": "allocs/op",
            "extra": "5 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb55877a330d4c45eb210a19188f54032d7f8274",
          "message": "build(deps): Bump github.com/shirou/gopsutil/v3 from 3.23.11 to 3.23.12 (#744)\n\nBumps\r\n[github.com/shirou/gopsutil/v3](https://github.com/shirou/gopsutil) from\r\n3.23.11 to 3.23.12.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/shirou/gopsutil/releases\">github.com/shirou/gopsutil/v3's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v3.23.12</h2>\r\n<!-- raw HTML omitted -->\r\n<h2>What's Changed</h2>\r\n<h3>cpu</h3>\r\n<ul>\r\n<li>Avoid some uses of regexps by <a\r\nhref=\"https://github.com/scop\"><code>@​scop</code></a> in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1570\">shirou/gopsutil#1570</a></li>\r\n<li>Avoid repeated regexp compilations by <a\r\nhref=\"https://github.com/scop\"><code>@​scop</code></a> in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1569\">shirou/gopsutil#1569</a></li>\r\n</ul>\r\n<h3>disk</h3>\r\n<ul>\r\n<li>feat(disk): look for filesystem labels from udev on Linux by <a\r\nhref=\"https://github.com/scop\"><code>@​scop</code></a> in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1573\">shirou/gopsutil#1573</a></li>\r\n</ul>\r\n<h3>host</h3>\r\n<ul>\r\n<li>add deepin and uos distro by <a\r\nhref=\"https://github.com/keeword\"><code>@​keeword</code></a> in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1561\">shirou/gopsutil#1561</a></li>\r\n</ul>\r\n<h3>Other Changes</h3>\r\n<ul>\r\n<li>Revert &quot;chore(deps): bump actions/labeler from 4.3.0 to\r\n5.0.0&quot; by <a\r\nhref=\"https://github.com/shirou\"><code>@​shirou</code></a> in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1564\">shirou/gopsutil#1564</a></li>\r\n</ul>\r\n<h2>New Contributors</h2>\r\n<ul>\r\n<li><a href=\"https://github.com/keeword\"><code>@​keeword</code></a> made\r\ntheir first contribution in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1561\">shirou/gopsutil#1561</a></li>\r\n</ul>\r\n<p><strong>Full Changelog</strong>: <a\r\nhref=\"https://github.com/shirou/gopsutil/compare/v3.23.11...v3.23.12\">https://github.com/shirou/gopsutil/compare/v3.23.11...v3.23.12</a></p>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/df3c7bdec0a58ca29b74457e37bc545f540eb4a0\"><code>df3c7bd</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1573\">#1573</a>\r\nfrom scop/feat/udev-fs-label</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/adaeba09d9ed5b0a95d0cf7656034d8873565ff7\"><code>adaeba0</code></a>\r\nfeat(disk): look for filesystem labels from udev on Linux</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/4870f6f119fadb622039e083a9e2280f1da415b5\"><code>4870f6f</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1569\">#1569</a>\r\nfrom scop/perf/regex-compile</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/08afc01d17fd284d59e4ef0d51ad976e9d706e99\"><code>08afc01</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1570\">#1570</a>\r\nfrom scop/perf/unnecessary-regexps</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/11bc5b3970859642148dbd0fa3157c4945498a5e\"><code>11bc5b3</code></a>\r\nAvoid some uses of regexps</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/362fa4b9c4058915c41458e68fd0ac297f2625cd\"><code>362fa4b</code></a>\r\nAvoid repeated regexp compilations</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/108235a0983e3f136a707ddfd5d73b2478673636\"><code>108235a</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1561\">#1561</a>\r\nfrom keeword/master</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/f308985abbab0da2951cdc404491eb9df5881831\"><code>f308985</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1563\">#1563</a>\r\nfrom shirou/dependabot/github_actions/actions/upload...</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/5ce87a61133b1f0a3508591dde9f6104dea799ad\"><code>5ce87a6</code></a>\r\nchore(deps): bump actions/upload-artifact from 3.1.3 to 4.0.0</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/4b820ed2cad8a89a7921ff74c16043d6834978c1\"><code>4b820ed</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1564\">#1564</a>\r\nfrom shirou/revert-1559-dependabot/github_actions/ac...</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/shirou/gopsutil/compare/v3.23.11...v3.23.12\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/shirou/gopsutil/v3&package-manager=go_modules&previous-version=3.23.11&new-version=3.23.12)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-11T16:06:32-05:00",
          "tree_id": "b7fb8de04ea3118bd0f637850c13b4759d06206d",
          "url": "https://github.com/runfinch/finch/commit/eb55877a330d4c45eb210a19188f54032d7f8274"
        },
        "date": 1705010255620,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 32696430542,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.9302,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 66.67,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 32.7,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1128161280,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1463168,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 31033,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24263350750,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 1.248,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 66.67,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.26,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 58654720,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1082624,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 23028,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 241975450,
            "unit": "ns/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 2.04,
            "unit": "%cpu_avg/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 16.07,
            "unit": "%cpu_peak/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2419,
            "unit": "cpu_seconds/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 6553,
            "unit": "disk_bytes/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21284,
            "unit": "B/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 273,
            "unit": "allocs/op",
            "extra": "5 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9a08b45466cc58326df05d94dfe91edd07158759",
          "message": "build(deps): Bump golang.org/x/image from 0.0.0-20210220032944-ac19c3e999fb to 0.10.0 (#752)\n\nBumps [golang.org/x/image](https://github.com/golang/image) from\r\n0.0.0-20210220032944-ac19c3e999fb to 0.10.0.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/golang/image/commits/v0.10.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=golang.org/x/image&package-manager=go_modules&previous-version=0.0.0-20210220032944-ac19c3e999fb&new-version=0.10.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\nYou can disable automated security fix PRs for this repo from the\r\n[Security Alerts\r\npage](https://github.com/runfinch/finch/network/alerts).\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-11T13:52:57-08:00",
          "tree_id": "227ea982fbb3bd2057aec38607f2ddaa89efc997",
          "url": "https://github.com/runfinch/finch/commit/9a08b45466cc58326df05d94dfe91edd07158759"
        },
        "date": 1705010434943,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 32332854083,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 1.021,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 66.67,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 32.33,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1297747968,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1448272,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 30694,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24284091583,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 1.074,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 66.67,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.28,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 54894592,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1083016,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 23025,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 252770850,
            "unit": "ns/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.96,
            "unit": "%cpu_avg/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 17.46,
            "unit": "%cpu_peak/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2527,
            "unit": "cpu_seconds/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21728,
            "unit": "B/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 283,
            "unit": "allocs/op",
            "extra": "5 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41898282+github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8b2d8cddc7fc63264c7f5bf1be2bd4417a92aaeb",
          "message": "build(deps): Bump submodules and dependencies (#733)\n\nAutomated changes by\r\n[create-pull-request](https://github.com/peter-evans/create-pull-request)\r\nGitHub action\r\n\r\nSigned-off-by: GitHub <noreply@github.com>\r\nSigned-off-by: Mrudul Harwani <mharwani@amazon.com>\r\nCo-authored-by: ginglis13 <ginglis13@users.noreply.github.com>",
          "timestamp": "2024-01-11T15:25:54-08:00",
          "tree_id": "f04b17052e4606778765629a0f3702e029fcba9a",
          "url": "https://github.com/runfinch/finch/commit/8b2d8cddc7fc63264c7f5bf1be2bd4417a92aaeb"
        },
        "date": 1705015740402,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 39545201208,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.6509,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 50,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 39.55,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 830312448,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1787672,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 37457,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24114241292,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.6427,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 44.44,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.11,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 36638720,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1076144,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22879,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 250606492,
            "unit": "ns/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.7193,
            "unit": "%cpu_avg/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 12.49,
            "unit": "%cpu_peak/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2505,
            "unit": "cpu_seconds/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21643,
            "unit": "B/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 282,
            "unit": "allocs/op",
            "extra": "5 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "89623dab53f0128c1616c66a7361a5ce3df847c3",
          "message": "build(deps): Bump golang.org/x/tools from 0.16.1 to 0.17.0 (#757)\n\nBumps [golang.org/x/tools](https://github.com/golang/tools) from 0.16.1\r\nto 0.17.0.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/0b1f1d4bc227cc2e610854f23e14696becb9e46c\"><code>0b1f1d4</code></a>\r\ngopls/internal/lsp/cache: (re-)ensure clean shutdown</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/706525de51451bb409297f305f23ac473eb693ff\"><code>706525d</code></a>\r\ngopls/internal/lsp/source/completion: support postfix completion\r\n(iferr,</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/581c0b357f883185d60780718e053e600005dac4\"><code>581c0b3</code></a>\r\ngopls/internal/lsp/source: add receiver name to stubbed methods</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/c95fa0ff4c2370b6f4b78947fc45987c8d0d664a\"><code>c95fa0f</code></a>\r\ngopls/internal/test: skip marker tests on darwin builders if -short</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/25a0e9d3e36e70c0dd9ab7302baa370bd20373b1\"><code>25a0e9d</code></a>\r\ngo.mod: update golang.org/x dependencies</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/c9c95f97fda18f56ab4c8c406e9f48a4cb3b3d7e\"><code>c9c95f9</code></a>\r\ninternal/refactor/inline: improve a confusing error message</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/ba8672b53f4b6840528df6fd534cb16f65278711\"><code>ba8672b</code></a>\r\ngo/analysis/passes/unusedresult: add functions from slices package</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/3e8a0a3b0845dc1af9def080412d0a11d11a10d6\"><code>3e8a0a3</code></a>\r\ngopls/internal/lsp/cache: address additional comments from CL\r\n553095</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/920d665b996049294bff24b972efc9f3d949a8ba\"><code>920d665</code></a>\r\ngopls/internal/cmd: factor three loops in fix subcommand</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/782573673af31588817cb7e79a1baeca1570609c\"><code>7825736</code></a>\r\ngopls/internal/lsp/cache: simplify critical errors</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/golang/tools/compare/v0.16.1...v0.17.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=golang.org/x/tools&package-manager=go_modules&previous-version=0.16.1&new-version=0.17.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-12T11:05:14-08:00",
          "tree_id": "fcfa893cdacfdc942ce32fc233324f115b8fae0a",
          "url": "https://github.com/runfinch/finch/commit/89623dab53f0128c1616c66a7361a5ce3df847c3"
        },
        "date": 1705086503150,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 37284210958,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.5296,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 45.45,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 37.28,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1142194176,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1694688,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 35356,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24142871250,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.6626,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 42.86,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.14,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 33497088,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1079360,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22941,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 251753688,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.625,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 15.83,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2517,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1024,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21786,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 284,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d3a7c84b02d70edad7947573f77dada22332f41",
          "message": "build(deps): Bump github.com/onsi/ginkgo/v2 from 2.13.2 to 2.14.0 (#758)\n\nBumps [github.com/onsi/ginkgo/v2](https://github.com/onsi/ginkgo) from\r\n2.13.2 to 2.14.0.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/ginkgo/releases\">github.com/onsi/ginkgo/v2's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v2.14.0</h2>\r\n<h2>2.14.0</h2>\r\n<h3>Features</h3>\r\n<p>You can now use <code>GinkgoTB()</code> when you need an instance of\r\n<code>testing.TB</code> to pass to a library.</p>\r\n<p>Prior to this release table testing only supported generating\r\nindividual <code>It</code>s for each test entry.\r\n<code>DescribeTableSubtree</code> extends table testing support to\r\nentire testing subtrees - under the hood\r\n<code>DescrieTableSubtree</code> generates a new container for each\r\nentry and invokes your function to fill our the container. See the <a\r\nhref=\"https://onsi.github.io/ginkgo/#generating-subtree-tables\">docs</a>\r\nto learn more.</p>\r\n<ul>\r\n<li>Introduce DescribeTableSubtree [65ec56d]</li>\r\n<li>add GinkgoTB() to docs [4a2c832]</li>\r\n<li>Add GinkgoTB() function (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1333\">#1333</a>)\r\n[92b6744]</li>\r\n</ul>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>Fix typo in internal/suite.go (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1332\">#1332</a>)\r\n[beb9507]</li>\r\n<li>Fix typo in docs/index.md (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1319\">#1319</a>)\r\n[4ac3a13]</li>\r\n<li>allow wasm to compile with ginkgo present (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1311\">#1311</a>)\r\n[b2e5bc5]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>Bump golang.org/x/tools from 0.16.0 to 0.16.1 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1316\">#1316</a>)\r\n[465a8ec]</li>\r\n<li>Bump actions/setup-go from 4 to 5 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1313\">#1313</a>)\r\n[eab0e40]</li>\r\n<li>Bump github/codeql-action from 2 to 3 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1317\">#1317</a>)\r\n[fbf9724]</li>\r\n<li>Bump golang.org/x/crypto (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1318\">#1318</a>)\r\n[3ee80ee]</li>\r\n<li>Bump golang.org/x/tools from 0.14.0 to 0.16.0 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1306\">#1306</a>)\r\n[123e1d5]</li>\r\n<li>Bump github.com/onsi/gomega from 1.29.0 to 1.30.0 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1297\">#1297</a>)\r\n[558f6e0]</li>\r\n<li>Bump golang.org/x/net from 0.17.0 to 0.19.0 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1307\">#1307</a>)\r\n[84ff7f3]</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Changelog</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/ginkgo/blob/master/CHANGELOG.md\">github.com/onsi/ginkgo/v2's\r\nchangelog</a>.</em></p>\r\n<blockquote>\r\n<h2>2.14.0</h2>\r\n<h3>Features</h3>\r\n<p>You can now use <code>GinkgoTB()</code> when you need an instance of\r\n<code>testing.TB</code> to pass to a library.</p>\r\n<p>Prior to this release table testing only supported generating\r\nindividual <code>It</code>s for each test entry.\r\n<code>DescribeTableSubtree</code> extends table testing support to\r\nentire testing subtrees - under the hood\r\n<code>DescrieTableSubtree</code> generates a new container for each\r\nentry and invokes your function to fill our the container. See the <a\r\nhref=\"https://onsi.github.io/ginkgo/#generating-subtree-tables\">docs</a>\r\nto learn more.</p>\r\n<ul>\r\n<li>Introduce DescribeTableSubtree [65ec56d]</li>\r\n<li>add GinkgoTB() to docs [4a2c832]</li>\r\n<li>Add GinkgoTB() function (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1333\">#1333</a>)\r\n[92b6744]</li>\r\n</ul>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>Fix typo in internal/suite.go (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1332\">#1332</a>)\r\n[beb9507]</li>\r\n<li>Fix typo in docs/index.md (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1319\">#1319</a>)\r\n[4ac3a13]</li>\r\n<li>allow wasm to compile with ginkgo present (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1311\">#1311</a>)\r\n[b2e5bc5]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>Bump golang.org/x/tools from 0.16.0 to 0.16.1 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1316\">#1316</a>)\r\n[465a8ec]</li>\r\n<li>Bump actions/setup-go from 4 to 5 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1313\">#1313</a>)\r\n[eab0e40]</li>\r\n<li>Bump github/codeql-action from 2 to 3 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1317\">#1317</a>)\r\n[fbf9724]</li>\r\n<li>Bump golang.org/x/crypto (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1318\">#1318</a>)\r\n[3ee80ee]</li>\r\n<li>Bump golang.org/x/tools from 0.14.0 to 0.16.0 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1306\">#1306</a>)\r\n[123e1d5]</li>\r\n<li>Bump github.com/onsi/gomega from 1.29.0 to 1.30.0 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1297\">#1297</a>)\r\n[558f6e0]</li>\r\n<li>Bump golang.org/x/net from 0.17.0 to 0.19.0 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1307\">#1307</a>)\r\n[84ff7f3]</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/beaf16d17f98f30365a11ff236583d611c094078\"><code>beaf16d</code></a>\r\nv2.14.0</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/4a2c8326e1a618a6dba9339e14755b30118e4260\"><code>4a2c832</code></a>\r\nadd GinkgoTB() to docs</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/92b6744a3a0c4e7a196009a0620b6c211e1d8b8e\"><code>92b6744</code></a>\r\nAdd GinkgoTB() function (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1333\">#1333</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/beb95072b84ada2addccf9dca167a35f56d2af39\"><code>beb9507</code></a>\r\nFix typo in internal/suite.go (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1332\">#1332</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/65ec56d254aaa3e221933e911aa1540f1e93bd00\"><code>65ec56d</code></a>\r\nIntroduce DescribeTableSubtree</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/4ac3a130a33f4839442f45331e3386b1d3d94a23\"><code>4ac3a13</code></a>\r\nFix typo in docs/index.md (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1319\">#1319</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/465a8ec1bb583f2f30af269e09b69d7142d11d0c\"><code>465a8ec</code></a>\r\nBump golang.org/x/tools from 0.16.0 to 0.16.1 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1316\">#1316</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/eab0e40d801360cf7a3665b47ebe80c08c8259e2\"><code>eab0e40</code></a>\r\nBump actions/setup-go from 4 to 5 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1313\">#1313</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/fbf9724382128d09643cb1339b838d9991745819\"><code>fbf9724</code></a>\r\nBump github/codeql-action from 2 to 3 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1317\">#1317</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/3ee80ee27f78973801684cd6da1a9c8d443bcf9d\"><code>3ee80ee</code></a>\r\nBump golang.org/x/crypto (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1318\">#1318</a>)</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/onsi/ginkgo/compare/v2.13.2...v2.14.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/onsi/ginkgo/v2&package-manager=go_modules&previous-version=2.13.2&new-version=2.14.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-12T12:46:44-08:00",
          "tree_id": "0c619c94ba05949f497359ea4e72b8da1c7e2fef",
          "url": "https://github.com/runfinch/finch/commit/7d3a7c84b02d70edad7947573f77dada22332f41"
        },
        "date": 1705092585415,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 37934759916,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 1.007,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 45.45,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 37.93,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1203789824,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1720840,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 35940,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24023729500,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 1.1,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 50,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.02,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 16797696,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1073136,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22812,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 266741542,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 2.977,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 19.51,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2667,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 4096,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 22330,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 298,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bb17a96b58b85c42fdc6fbd093209ce1ab900707",
          "message": "build(deps): Bump github.com/runfinch/common-tests from 0.7.11 to 0.7.12 (#761)\n\nBumps\r\n[github.com/runfinch/common-tests](https://github.com/runfinch/common-tests)\r\nfrom 0.7.11 to 0.7.12.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/runfinch/common-tests/releases\">github.com/runfinch/common-tests's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v0.7.12</h2>\r\n<h2><a\r\nhref=\"https://github.com/runfinch/common-tests/compare/v0.7.11...v0.7.12\">0.7.12</a>\r\n(2024-01-13)</h2>\r\n<h3>Build System or External Dependencies</h3>\r\n<ul>\r\n<li><strong>deps:</strong> Bump github.com/onsi/ginkgo/v2 from 2.13.2 to\r\n2.14.0 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/112\">#112</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/ece5ec6eab9870208c693bdf34ee8371373b3501\">ece5ec6</a>)</li>\r\n</ul>\r\n<h3>Bug Fixes</h3>\r\n<ul>\r\n<li>allow propagation time for async conditions (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/111\">#111</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/8aeb41a875c62a0aedfe7042861c424d42ab7bb1\">8aeb41a</a>)</li>\r\n<li>increase nginx pull timeout (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/114\">#114</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/33308d0ea9235454783bd88cc40de3d84852974a\">33308d0</a>)</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Changelog</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/runfinch/common-tests/blob/main/CHANGELOG.md\">github.com/runfinch/common-tests's\r\nchangelog</a>.</em></p>\r\n<blockquote>\r\n<h2><a\r\nhref=\"https://github.com/runfinch/common-tests/compare/v0.7.11...v0.7.12\">0.7.12</a>\r\n(2024-01-13)</h2>\r\n<h3>Build System or External Dependencies</h3>\r\n<ul>\r\n<li><strong>deps:</strong> Bump github.com/onsi/ginkgo/v2 from 2.13.2 to\r\n2.14.0 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/112\">#112</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/ece5ec6eab9870208c693bdf34ee8371373b3501\">ece5ec6</a>)</li>\r\n</ul>\r\n<h3>Bug Fixes</h3>\r\n<ul>\r\n<li>allow propagation time for async conditions (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/111\">#111</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/8aeb41a875c62a0aedfe7042861c424d42ab7bb1\">8aeb41a</a>)</li>\r\n<li>increase nginx pull timeout (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/114\">#114</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/33308d0ea9235454783bd88cc40de3d84852974a\">33308d0</a>)</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/runfinch/common-tests/commit/d5a29d515cf91e308504fb61c58c8903a7d0b1f5\"><code>d5a29d5</code></a>\r\nchore(main): release 0.7.12 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/113\">#113</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/runfinch/common-tests/commit/33308d0ea9235454783bd88cc40de3d84852974a\"><code>33308d0</code></a>\r\nfix: increase nginx pull timeout (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/114\">#114</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/runfinch/common-tests/commit/ece5ec6eab9870208c693bdf34ee8371373b3501\"><code>ece5ec6</code></a>\r\nbuild(deps): Bump github.com/onsi/ginkgo/v2 from 2.13.2 to 2.14.0 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/112\">#112</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/runfinch/common-tests/commit/8aeb41a875c62a0aedfe7042861c424d42ab7bb1\"><code>8aeb41a</code></a>\r\nfix: allow propagation time for async conditions (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/111\">#111</a>)</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/runfinch/common-tests/compare/v0.7.11...v0.7.12\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/runfinch/common-tests&package-manager=go_modules&previous-version=0.7.11&new-version=0.7.12)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-16T12:24:28-05:00",
          "tree_id": "e7b2bd710797bd598202acf73a6ff2ea46524980",
          "url": "https://github.com/runfinch/finch/commit/bb17a96b58b85c42fdc6fbd093209ce1ab900707"
        },
        "date": 1705426070783,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 36169898958,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.468,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 45.45,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 36.17,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1361764352,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1645896,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 34245,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24139712459,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.6713,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 50,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.14,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 125833216,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1080024,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22943,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 262124942,
            "unit": "ns/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.623,
            "unit": "%cpu_avg/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 15.24,
            "unit": "%cpu_peak/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2621,
            "unit": "cpu_seconds/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 22088,
            "unit": "B/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 293,
            "unit": "allocs/op",
            "extra": "5 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fa85ba694545c4c82b6449c1845a6ed48b642d1b",
          "message": "ci(deps): Bump actions/upload-artifact from 4.0.0 to 4.1.0 (#760)\n\nBumps\r\n[actions/upload-artifact](https://github.com/actions/upload-artifact)\r\nfrom 4.0.0 to 4.1.0.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/actions/upload-artifact/releases\">actions/upload-artifact's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v4.1.0</h2>\r\n<h2>What's Changed</h2>\r\n<ul>\r\n<li>Add migrations docs by <a\r\nhref=\"https://github.com/robherley\"><code>@​robherley</code></a> in <a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/482\">actions/upload-artifact#482</a></li>\r\n<li>Update README.md by <a\r\nhref=\"https://github.com/samuelwine\"><code>@​samuelwine</code></a> in <a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/492\">actions/upload-artifact#492</a></li>\r\n<li>Support artifact-url output by <a\r\nhref=\"https://github.com/konradpabjan\"><code>@​konradpabjan</code></a>\r\nin <a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/496\">actions/upload-artifact#496</a></li>\r\n<li>Update readme to reflect new 500 artifact per job limit by <a\r\nhref=\"https://github.com/robherley\"><code>@​robherley</code></a> in <a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/497\">actions/upload-artifact#497</a></li>\r\n</ul>\r\n<h2>New Contributors</h2>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/samuelwine\"><code>@​samuelwine</code></a> made\r\ntheir first contribution in <a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/492\">actions/upload-artifact#492</a></li>\r\n</ul>\r\n<p><strong>Full Changelog</strong>: <a\r\nhref=\"https://github.com/actions/upload-artifact/compare/v4...v4.1.0\">https://github.com/actions/upload-artifact/compare/v4...v4.1.0</a></p>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/1eb3cb2b3e0f29609092a73eb033bb759a334595\"><code>1eb3cb2</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/497\">#497</a>\r\nfrom actions/robherley/update-readme-limit</li>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/8688a86492f53c8d67423223a877bc9e3768fe95\"><code>8688a86</code></a>\r\nUpdate readme to reflect new artifact/job limit</li>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/73d8b66ede50d06e26f1d69f28e1652c702c56d8\"><code>73d8b66</code></a>\r\nSupport artifact-url output (<a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/496\">#496</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/c320f57948d137eb8c7f8e781ddcc0f61b04e834\"><code>c320f57</code></a>\r\nUpdate README.md (<a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/492\">#492</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/cf8714cfeaba5687a442b9bcb85b29e23f468dfa\"><code>cf8714c</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/482\">#482</a>\r\nfrom actions/robherley/add-migration-docs</li>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/7f16e37e88af9d50a1db3c1e84660985ee8dd1ab\"><code>7f16e37</code></a>\r\nadd migrations docs</li>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/353073034f1f3c6d1a65ede161c5a2ca79650a49\"><code>3530730</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/468\">#468</a>\r\nfrom actions/robherley/misc-updates</li>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/6c139afa6f18a1359e5a9185f9415433473e3793\"><code>6c139af</code></a>\r\nupdate imports and old v4-beta references</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/actions/upload-artifact/compare/c7d193f32edcb7bfad88892161225aeda64e9392...1eb3cb2b3e0f29609092a73eb033bb759a334595\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/upload-artifact&package-manager=github_actions&previous-version=4.0.0&new-version=4.1.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-16T12:25:30-05:00",
          "tree_id": "71e06288cc00059923e759430deb91cf36e48c8e",
          "url": "https://github.com/runfinch/finch/commit/fa85ba694545c4c82b6449c1845a6ed48b642d1b"
        },
        "date": 1705426128530,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 33036070750,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.5095,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 36.36,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 33.04,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1138266112,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1476872,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 31348,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24173625500,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.6805,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 40,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.17,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 57851904,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1079888,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22942,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 253816771,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.311,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 12.5,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2538,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 3670016,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21776,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 285,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cnkevin@amazon.com",
            "name": "Kevin Li",
            "username": "KevinLiAWS"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ec9d697bb82cce541f22dba76150de99bf17c6ac",
          "message": "ci: Enable nightly build for Windows MSI and integrate action into 1 click release automation (#695)\n\nEnable nightly build for Windows MSI and integrate atom action into 1\r\nclick automation\r\n\r\n*Description of changes:*\r\nAdded the scheduled time to Windows build and test action.\r\n\r\n*Testing done:*\r\nTODO\r\n\r\n\r\n- [X] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\n---------\r\n\r\nSigned-off-by: Vishwas Siravara <siravara@amazon.com>\r\nSigned-off-by: Vishwas Siravara <vsiravar@gmail.com>\r\nSigned-off-by: Gavin Inglis <giinglis@amazon.com>\r\nSigned-off-by: Justin Alvarez <alvajus@amazon.com>\r\nSigned-off-by: chaoningusc <chaoningusc@gmail.com>\r\nSigned-off-by: cnkevin@amazon.com <chaoningusc@gmail.com>\r\nSigned-off-by: Kevin Li <cnkevin@amazon.com>\r\nCo-authored-by: Vishwas Siravara <siravara@amazon.com>\r\nCo-authored-by: Vishwas Siravara <vsiravar@gmail.com>\r\nCo-authored-by: Vishwas Siravara <vsiravara@gmail.com>\r\nCo-authored-by: Gavin Inglis <43075615+ginglis13@users.noreply.github.com>\r\nCo-authored-by: Justin <pendo324@users.noreply.github.com>\r\nCo-authored-by: chaoningusc <chaoningusc@gmail.com>\r\nCo-authored-by: Justin Alvarez <alvajus@amazon.com>",
          "timestamp": "2024-01-18T19:04:02-05:00",
          "tree_id": "e69b829f722dec1a7c9cf2f50d1aea09eecd6cdf",
          "url": "https://github.com/runfinch/finch/commit/ec9d697bb82cce541f22dba76150de99bf17c6ac"
        },
        "date": 1705622920139,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 35954265083,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.8333,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 50,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 35.95,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1120280576,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1598792,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 34094,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 25173067875,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 1.117,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 50,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 25.17,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 278839296,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1121368,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 23901,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 251771742,
            "unit": "ns/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 2.191,
            "unit": "%cpu_avg/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 16.39,
            "unit": "%cpu_peak/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2517,
            "unit": "cpu_seconds/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21475,
            "unit": "B/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 283,
            "unit": "allocs/op",
            "extra": "5 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pendo324@users.noreply.github.com",
            "name": "Justin",
            "username": "pendo324"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "673c2a5315b562a1f3c18413575c874d8956daad",
          "message": "ci: make tests more reliable and debuggable (#759)\n\nIssue #, if available: The most common case for macOS tests failing\r\nseems to be vm init or vm start failing (or, partially failing), see:\r\nhttps://github.com/runfinch/finch/actions/runs/7493200344/job/20398390952,\r\nhttps://github.com/runfinch/finch/actions/runs/7493150724/job/20398225275,\r\nhttps://github.com/runfinch/finch/actions/runs/7493910137/job/20400678411\r\n\r\n*Description of changes:*\r\n- Adds a delay between vm state changes. I'm not sure if this will fix\r\nthe issue, but its worth a try\r\n\r\n*Testing done:*\r\n\r\n\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\n---------\r\n\r\nSigned-off-by: Justin Alvarez <alvajus@amazon.com>",
          "timestamp": "2024-01-22T10:18:42-05:00",
          "tree_id": "ee18a050ca846eefb2426eebca2ea99597c9d3ae",
          "url": "https://github.com/runfinch/finch/commit/673c2a5315b562a1f3c18413575c874d8956daad"
        },
        "date": 1705936912896,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 34246286833,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.7239,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 50,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 34.25,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1124954112,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1527536,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 32471,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 25173413709,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.833,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 44.44,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 25.17,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 140398592,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1121424,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 23895,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 272849584,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.257,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 15.83,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2728,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 4096,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 22674,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 304,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pendo324@users.noreply.github.com",
            "name": "Justin",
            "username": "pendo324"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "700cb92da72510b47498c48f188c50806382a291",
          "message": "fix: properly reload persistent snapshotter data and restart services (#767)\n\nIssue #, if available: re-verified #412\r\n- Through extensive e2e test debugging, I noticed that soci and stargz\r\nsnapshotters weren't persisting data as expected. After debugging, I\r\nfound some context in these two PRs:\r\n  - https://github.com/awslabs/soci-snapshotter/pull/881\r\n  - https://github.com/containerd/stargz-snapshotter/pull/1526\r\nUnfortunately, neither of them are deployed yet, so I've implemented a\r\nhacky workaround for now. After this change, an image/container can be\r\npull/run, the VM can be restarted, and then the container can be\r\nre-started again.\r\n\r\n*Description of changes:*\r\n- Redo how BuildKit/Stargz/SOCI are related to containerd using\r\n[systemd's `PartOf`\r\n\r\n](https://www.freedesktop.org/software/systemd/man/latest/systemd.unit.html#PartOf=)\r\n- this ensures that all of these services are restarted when containerd\r\nis restarted, which the lack of has caused errors in the past\r\n- Create some missing directories that might throw errors in cloud-init\r\n- Ensure that `SIGTERM` is used to kill the snapshotter services for now\r\n\r\n*Testing done:*\r\n- manual testing\r\n\r\n\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\n---------\r\n\r\nSigned-off-by: Justin Alvarez <alvajus@amazon.com>",
          "timestamp": "2024-01-29T11:43:15-05:00",
          "tree_id": "ebf927cf48687823362eb8c5c436ccb9d255d6be",
          "url": "https://github.com/runfinch/finch/commit/700cb92da72510b47498c48f188c50806382a291"
        },
        "date": 1706546778937,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 34802290416,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4934,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 41.67,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 34.8,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1236979712,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1549040,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 32977,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24102179959,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.5587,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 33.33,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.1,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 136134656,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1076360,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22876,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 257528458,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.789,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 13.75,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2575,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 4096,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 22014,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 289,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
          }
        ]
      }
    ]
  }
}