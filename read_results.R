library(tidyverse)

d = read_csv("~/Downloads/results.csv", comment="#",
             col_names =c("Time", "ID", "Var", "X", "Other", "cond", "Item", "Region", "Word", "RT", "O", "Sent", "X3", "X2"))

d = filter(d, grepl("Dashed", Var)) %>%
  separate(cond, into=c("cond", "bias", "actual"), sep="-") %>%
  filter(cond == "bias") %>%
  group_by(ID, Item, cond, bias, actual) %>%
  mutate(Time = Time - lag(Time),
         RT = as.numeric(RT),
         combined_cond = paste(bias, actual),
         `is mismatch` = bias != actual)


d.sum = group_by(d, bias, actual, Region, combined_cond, `is mismatch`) %>%
  mutate(RT = ifelse(RT > 1000, 1000, RT)) %>%
  summarise(m=mean(RT, na.rm=T)) 
  

d.sum$bias = paste0("bias: ", d.sum$bias)
d.sum$actual = paste0("actual: ", d.sum$actual)
d.sum$combined_cond = with(d.sum, paste(bias, actual))
# ["The senator", "wrote", "their opponent", "was", "acquitted", "before", "getting", "elected"]
ggplot(d.sum, aes(x=Region, y=m, group=combined_cond, colour=combined_cond, lty=`is mismatch`))  +
  geom_line() +
  geom_point() + 
  scale_x_discrete(breaks=seq(1, 8), labels = c("NOUN\nThe senator", "VERB\nwrote", "NOUN2\ntheir opponent", "VERB/PREP\nwas", "PRED", "END1", "END2", "END3")) + 
  theme_bw(18) + 
  ylab("mean Reaction Time in ms")
ggsave("~/Downloads/test.pdf", width=12, height=8)



d.sum$Region = as.numeric(d.sum$Region)

