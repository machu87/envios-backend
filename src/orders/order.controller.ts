@UseGuards(JwtAuthGuard)
@Post()
create(@Request() req, @Body() dto: CreateOrderDto) {
  return this.orderService.create(req.user.sub, dto);
}

@Get()
findAll(@Query() filters: FilterOrderDto) {
  return this.orderService.findAll(filters);
}

@Get("export")
async exportCSV(@Res() res) {
  const csv = await this.orderService.exportCSV();
  res.header("Content-Type", "text/csv");
  res.attachment("ordenes.csv");
  res.send(csv);
}