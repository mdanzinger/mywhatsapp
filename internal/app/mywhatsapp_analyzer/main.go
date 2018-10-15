package main

import (
	"github.com/mdanzinger/mywhatsapp/internal/pkg/analyzer"
	"github.com/mdanzinger/mywhatsapp/internal/pkg/poller/sqs"
	"github.com/mdanzinger/mywhatsapp/internal/pkg/report"
	"github.com/mdanzinger/mywhatsapp/internal/pkg/storage/s3"
	"github.com/mdanzinger/mywhatsapp/internal/pkg/store/dynamodb"
	"github.com/mdanzinger/mywhatsapp/internal/pkg/store/redis"
)

func main() {
	p := sqs.NewReportPoller()
	c := redis.NewReportCache()
	s := dynamodb.NewReportStore(c)
	fs := s3.NewReportStorage()

	a := analyzer.NewAnalyzer()

	ra := report.NewReportAnalyzer(s, fs, p, a)

	ra.Start()
}
