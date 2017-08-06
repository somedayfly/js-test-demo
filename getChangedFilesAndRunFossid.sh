#!/bin/bash

preCommitId=$1
commitId=$2
scmType=$3
repoUrl=$4
fossidResultFile=$5
diffDir=diffTempDir/

# copy svn diff files
copySvnChangedFiles(){
	for i in $(svn diff -r $preCommitId:$commitId $repoUrl --summarize | awk '{ print $2 }'); do
		localFilePath=$(echo $i | sed -e "s{$repoUrl/{{");
		cp -r $localFilePath $diffDir
	done
}

# copy git diff files
copyGitChangedFiles(){
	git diff $preCommitId $commitId --name-only |xargs -i cp {} $diffDir
}

copyChangedFiles(){
	echo "start to copy changed files to $diffDir"
	if [ $scmType = "git" ]; then
		copyGitChangedFiles
	else
		copySvnChangedFiles
	fi
	echo "finish copy operation"
}

runFossid(){
	echo "start to run fossid by cli"
	fossid $diffDir >$fossidResultFile
	echo "finish run fossid"
}

echo "delete temp dir $diffDir"
rm -rf $diffDir
echo "create temp dir $diffDir"
mkdir -p $diffDir

copyChangedFiles

#runFossid