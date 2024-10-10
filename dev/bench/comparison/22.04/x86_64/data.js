window.BENCHMARK_DATA = {
  "lastUpdate": 1728536899713,
  "repoUrl": "https://github.com/coderbirju/finch",
  "entries": {
    "Finch Benchmark": [
      {
        "commit": {
          "author": {
            "email": "arjunry@amazon.com",
            "name": "Arjun",
            "username": "coderbirju"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0d796639703fbf1a13a9df7faae59cb618568973",
          "message": "Merge pull request #11 from coderbirju/temp-finch-v-docker-benchmarking\n\nci: Update install step",
          "timestamp": "2024-10-09T22:05:45-07:00",
          "tree_id": "69f2cd00cb39a95617b5d98f12ce439fe86029a3",
          "url": "https://github.com/coderbirju/finch/commit/0d796639703fbf1a13a9df7faae59cb618568973"
        },
        "date": 1728536899431,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkContainer/BenchmarkContainerRun-docker",
            "value": 1871653293,
            "unit": "ns/op\t        10.26 %cpu_avg/op\t       100.0 %cpu_peak/op\t         1.872 cpu_seconds/op\t    167936 disk_bytes/op\t 1759568 B/op\t    4830 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkContainer/BenchmarkContainerRun-docker - ns/op",
            "value": 1871653293,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkContainer/BenchmarkContainerRun-docker - %cpu_avg/op",
            "value": 10.26,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkContainer/BenchmarkContainerRun-docker - %cpu_peak/op",
            "value": 100,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkContainer/BenchmarkContainerRun-docker - cpu_seconds/op",
            "value": 1.872,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkContainer/BenchmarkContainerRun-docker - disk_bytes/op",
            "value": 167936,
            "unit": "disk_bytes/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkContainer/BenchmarkContainerRun-docker - B/op",
            "value": 1759568,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkContainer/BenchmarkContainerRun-docker - allocs/op",
            "value": 4830,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkContainer/BenchmarkContainerPull-docker",
            "value": 28532180577,
            "unit": "ns/op\t        28.65 %cpu_avg/op\t       100.0 %cpu_peak/op\t        28.53 cpu_seconds/op\t1603403776 disk_bytes/op\t26636800 B/op\t   72209 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkContainer/BenchmarkContainerPull-docker - ns/op",
            "value": 28532180577,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkContainer/BenchmarkContainerPull-docker - %cpu_avg/op",
            "value": 28.65,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkContainer/BenchmarkContainerPull-docker - %cpu_peak/op",
            "value": 100,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkContainer/BenchmarkContainerPull-docker - cpu_seconds/op",
            "value": 28.53,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkContainer/BenchmarkContainerPull-docker - disk_bytes/op",
            "value": 1603403776,
            "unit": "disk_bytes/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkContainer/BenchmarkContainerPull-docker - B/op",
            "value": 26636800,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkContainer/BenchmarkContainerPull-docker - allocs/op",
            "value": 72209,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkContainer/BenchmarkImageBuild-docker",
            "value": 20961148175,
            "unit": "ns/op\t        39.65 %cpu_avg/op\t       100.0 %cpu_peak/op\t        20.96 cpu_seconds/op\t1603817472 disk_bytes/op\t19554416 B/op\t   53038 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkContainer/BenchmarkImageBuild-docker - ns/op",
            "value": 20961148175,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkContainer/BenchmarkImageBuild-docker - %cpu_avg/op",
            "value": 39.65,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkContainer/BenchmarkImageBuild-docker - %cpu_peak/op",
            "value": 100,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkContainer/BenchmarkImageBuild-docker - cpu_seconds/op",
            "value": 20.96,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkContainer/BenchmarkImageBuild-docker - disk_bytes/op",
            "value": 1603817472,
            "unit": "disk_bytes/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkContainer/BenchmarkImageBuild-docker - B/op",
            "value": 19554416,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkContainer/BenchmarkImageBuild-docker - allocs/op",
            "value": 53038,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkContainer/BenchmarkImageDelete-docker",
            "value": 20420606,
            "unit": "ns/op\t        50.00 %cpu_avg/op\t        50.00 %cpu_peak/op\t         0.02039 cpu_seconds/op\t    -12288 disk_bytes/op\t   32128 B/op\t     132 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkContainer/BenchmarkImageDelete-docker - ns/op",
            "value": 20420606,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkContainer/BenchmarkImageDelete-docker - %cpu_avg/op",
            "value": 50,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkContainer/BenchmarkImageDelete-docker - %cpu_peak/op",
            "value": 50,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkContainer/BenchmarkImageDelete-docker - cpu_seconds/op",
            "value": 0.02039,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkContainer/BenchmarkImageDelete-docker - disk_bytes/op",
            "value": -12288,
            "unit": "disk_bytes/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkContainer/BenchmarkImageDelete-docker - B/op",
            "value": 32128,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkContainer/BenchmarkImageDelete-docker - allocs/op",
            "value": 132,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          }
        ]
      }
    ]
  }
}