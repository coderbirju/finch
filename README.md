Alpine-Image
goos: linux
goarch: amd64
cpu: Intel(R) Xeon(R) Platinum 8259CL CPU @ 2.50GHz
BenchmarkContainer/BenchmarkContainerRun-finch-2         	       5	 509099371 ns/op	        58.32 %cpu_avg/op	       100.0 %cpu_peak/op	         0.5090 cpu_seconds/op	    222822 disk_bytes/op	  464350 B/op	    1302 allocs/op
BenchmarkContainer/BenchmarkContainerRun-docker-2        	       5	 724520426 ns/op	        37.93 %cpu_avg/op	       100.0 %cpu_peak/op	         0.7243 cpu_seconds/op	     82739 disk_bytes/op	  649304 B/op	    1801 allocs/op
BenchmarkContainer/BenchmarkContainerPull-finch-2        	       5	 520815319 ns/op	        44.33 %cpu_avg/op	       100.0 %cpu_peak/op	         0.5208 cpu_seconds/op	  10067968 disk_bytes/op	  469862 B/op	    1316 allocs/op
BenchmarkContainer/BenchmarkContainerPull-docker-2       	       5	 599878204 ns/op	        15.27 %cpu_avg/op	        86.67 %cpu_peak/op	         0.5996 cpu_seconds/op	     -3276 disk_bytes/op	  550704 B/op	    1535 allocs/op
BenchmarkContainer/BenchmarkImageBuild-finch-2           	       5	 909495694 ns/op	        58.27 %cpu_avg/op	       100.0 %cpu_peak/op	         0.9092 cpu_seconds/op	  10172825 disk_bytes/op	  814846 B/op	    2248 allocs/op
BenchmarkContainer/BenchmarkImageBuild-docker-2          	       5	 434906720 ns/op	        43.62 %cpu_avg/op	       100.0 %cpu_peak/op	         0.4347 cpu_seconds/op	     81920 disk_bytes/op	  400912 B/op	    1129 allocs/op
BenchmarkContainer/BenchmarkImageDelete-finch-2          	       5	 153457410 ns/op	        59.21 %cpu_avg/op	       100.0 %cpu_peak/op	         0.1534 cpu_seconds/op	  -1984921 disk_bytes/op	  137291 B/op	     416 allocs/op
BenchmarkContainer/BenchmarkImageDelete-docker-2         	       5	  82041749 ns/op	        53.17 %cpu_avg/op	        83.33 %cpu_peak/op	         0.08200 cpu_seconds/op	       819.0 disk_bytes/op	   77808 B/op	     255 allocs/op


public.ecr.aws/y0o4y9o3/anaconda-pkg-build:latest
goos: linux
goarch: amd64
pkg: github.com/runfinch/finch/benchmark/container
cpu: Intel(R) Xeon(R) Platinum 8259CL CPU @ 2.50GHz
BenchmarkContainer/BenchmarkContainerRun-finch-2                       5         587066481 ns/op	        70.52 %cpu_avg/op	       100.0 %cpu_peak/op	         0.5870 cpu_seconds/op	    196608 disk_bytes/op	  531952 B/op	    1485 allocs/op
BenchmarkContainer/BenchmarkContainerPull-finch-2                      5         322638206 ns/op	        37.93 %cpu_avg/op	       100.0 %cpu_peak/op	         0.3226 cpu_seconds/op	         0 disk_bytes/op	  290824 B/op	     832 allocs/op
BenchmarkContainer/BenchmarkImageBuild-finch-2                         5         38061848792 ns/op	        81.51 %cpu_avg/op	       100.0 %cpu_peak/op	         38.06 cpu_seconds/op	 -94490624 disk_bytes/op	  34279360 B/op	   92556 allocs/op
BenchmarkContainer/BenchmarkImageDelete-finch-2                        5         135232934 ns/op	        60.61 %cpu_avg/op	       100.0 %cpu_peak/op	         0.1352 cpu_seconds/op	    -49152 disk_bytes/op	  117592 B/op	     362 allocs/op
BenchmarkContainer/BenchmarkContainerPull-docker-2                     5         647970164 ns/op	        11.20 %cpu_avg/op	       100.0 %cpu_peak/op	         0.6479 cpu_seconds/op	    212992 disk_bytes/op	  600368 B/op	    1680 allocs/op
BenchmarkContainer/BenchmarkContainerRun-docker-2                      5         681067276 ns/op	        31.08 %cpu_avg/op	       100.0 %cpu_peak/op	         0.6810 cpu_seconds/op	    -32768 disk_bytes/op	  618248 B/op	    1718 allocs/op
BenchmarkContainer/BenchmarkImageBuild-docker-2                        5         36747285615 ns/op	        67.71 %cpu_avg/op	       100.0 %cpu_peak/op	         36.75 cpu_seconds/op	1715875840 disk_bytes/op	  33705112 B/op	   91012 allocs/op
BenchmarkContainer/BenchmarkImageDelete-docker-2                       5          119696653 ns/op	        68.33 %cpu_avg/op	       100.0 %cpu_peak/op	         0.1196 cpu_seconds/op	      4096 disk_bytes/op	  108608 B/op	     339 allocs/op
	 

public.ecr.aws/soci-workshop-examples/node:latest
goos: linux
goarch: amd64
pkg: github.com/runfinch/finch/benchmark/container
cpu: Intel(R) Xeon(R) Platinum 8259CL CPU @ 2.50GHz
BenchmarkContainer/BenchmarkContainerRun-finch-2         	      20	3455454585 ns/op	        28.46 %cpu_avg/op	       100.0 %cpu_peak/op	         3.455 cpu_seconds/op	 -26255360 disk_bytes/op	 3131360 B/op	    8510 allocs/op
BenchmarkContainer/BenchmarkContainerRun-docker-2        	      20	7757108049 ns/op	        18.89 %cpu_avg/op	       100.0 %cpu_peak/op	         7.757 cpu_seconds/op	-394506240 disk_bytes/op	 7074288 B/op	   19173 allocs/op
BenchmarkContainer/BenchmarkContainerPull-finch-2        	      20	22118403240 ns/op	        66.26 %cpu_avg/op	       100.0 %cpu_peak/op	        22.12 cpu_seconds/op	2334605312 disk_bytes/op	19829840 B/op	   53605 allocs/op
BenchmarkContainer/BenchmarkContainerPull-docker-2       	      20	44462041302 ns/op	        35.29 %cpu_avg/op	       100.0 %cpu_peak/op	        44.46 cpu_seconds/op	1388736512 disk_bytes/op	40553272 B/op	  109557 allocs/op
BenchmarkContainer/BenchmarkImageBuild-finch-2           	      20	76127741749 ns/op	        76.52 %cpu_avg/op	       100.0 %cpu_peak/op	        76.13 cpu_seconds/op	1498722304 disk_bytes/op	68551648 B/op	  185225 allocs/op
BenchmarkContainer/BenchmarkImageBuild-docker-2          	      20	 24342207115 ns/op	        58.95 %cpu_avg/op	       100.0 %cpu_peak/op	        24.34 cpu_seconds/op	1293246464 disk_bytes/op	22239072 B/op	   60135 allocs/op
BenchmarkContainer/BenchmarkImageDelete-finch-2          	      20	 1041080136 ns/op	        62.38 %cpu_avg/op	       100.0 %cpu_peak/op	         1.041 cpu_seconds/op	-1382612992 disk_bytes/op	  954576 B/op	    2627 allocs/op
BenchmarkContainer/BenchmarkImageDelete-docker-2         	      20	  117616361 ns/op	        57.67 %cpu_avg/op	       100.0 %cpu_peak/op	         0.1176 cpu_seconds/op	 -27705344 disk_bytes/op	  108768 B/op	     339 allocs/op


public.ecr.aws/soci-workshop-examples/tensorflow_gpu:latest
goos: linux
goarch: amd64
pkg: github.com/runfinch/finch/benchmark/container
cpu: Intel(R) Xeon(R) Platinum 8259CL CPU @ 2.50GHz
BenchmarkContainer/BenchmarkContainerRun-finch-2         	      20	3128082038 ns/op	        24.53 %cpu_avg/op	       100.0 %cpu_peak/op	         3.128 cpu_seconds/op	    241664 disk_bytes/op	 2862224 B/op	    7779 allocs/op
BenchmarkContainer/BenchmarkContainerRun-docker-2        	      20	7451326779 ns/op	        15.13 %cpu_avg/op	       100.0 %cpu_peak/op	         7.451 cpu_seconds/op	-374542336 disk_bytes/op	 6833928 B/op	   18520 allocs/op
BenchmarkContainer/BenchmarkContainerPull-finch-2        	      20	10246951854 ns/op	        60.68 %cpu_avg/op	       100.0 %cpu_peak/op	        10.25 cpu_seconds/op	1332887552 disk_bytes/op	 9208952 B/op	   24920 allocs/op
BenchmarkContainer/BenchmarkContainerPull-docker-2       	      20	19823840965 ns/op	        68.15 %cpu_avg/op	       100.0 %cpu_peak/op	        19.82 cpu_seconds/op	1406275584 disk_bytes/op	18152184 B/op	   49073 allocs/op
BenchmarkContainer/BenchmarkImageBuild-finch-2           	      20	339181411461 ns/op	        71.97 %cpu_avg/op	       100.0 %cpu_peak/op	       339.2 cpu_seconds/op	9682067456 disk_bytes/op	307573008 B/op	  829974 allocs/op
BenchmarkContainer/BenchmarkImageBuild-docker-2          	      20	 134969791209 ns/op	        65.45 %cpu_avg/op	       100.0 %cpu_peak/op	       135.0 cpu_seconds/op	     6976700416 disk_bytes/op	123845464 B/op	  334218 allocs/op
BenchmarkContainer/BenchmarkImageDelete-finch-2          	      20	 1130480301 ns/op	        55.35 %cpu_avg/op	       100.0 %cpu_peak/op	         1.130 cpu_seconds/op	-1387474944 disk_bytes/op	 1031552 B/op	    2836 allocs/op
BenchmarkContainer/BenchmarkImageDelete-docker-2         	      20	  132564220 ns/op	        75.76 %cpu_avg/op	       100.0 %cpu_peak/op	         0.1325 cpu_seconds/op	    -12288 disk_bytes/op	  118520 B/op	     366 allocs/op
	
