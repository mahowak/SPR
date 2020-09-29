library(tidyverse)

d = read_csv("~/Downloads/results23.csv", comment="#",
             col_names =c("Time", "ID", "Var", "X", "Other", "cond", "Item", "Region", "Word", "RT", "O", "Sent", "X3", "X2"))

d = filter(d, grepl("Dashed", Var)) %>%
  separate(cond, into=c("cond", "bias", "actual"), sep="-") %>%
  filter(cond == "bias") %>%
  group_by(ID, Item, cond, bias, actual) %>%
  mutate(Time = Time - lag(Time),
         RT = as.numeric(RT),
         combined_cond = paste(bias, actual))


d.sum = group_by(d, bias, actual, Region, combined_cond) %>%
  summarise(m=mean(RT, na.rm=T)) 
  


ggplot(d.sum, aes(x=Region, y=m, group=combined_cond, colour=combined_cond))  +
  geom_line() +
  geom_point() + 
  scale_x_discrete(breaks=seq(1, 8), labels = c("NOUN", "VERB", "NOUN2", "VERB/PREP", "PRED", "END1", "END2", "END3")) + 
  theme_bw(18)
