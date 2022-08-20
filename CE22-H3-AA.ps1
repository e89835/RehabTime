# CE 22 H3 Automation script
# Please note to enter the login user & pwd as arg1 & arg2
# The Docker daemon must be running

$user=$args[0]
$pwd=$args[1]

cd C:\Users\JuanJo\Desktop\MII\2122\CC\Proyecto\rehabtime
docker login -u $user
$pwd
docker tag node-alpine:latest e89835/rehabtime:rehabtime-node # Tag source-image target-image 
docker push e89835/rehabtime:rehabtime-node # Push name-tag